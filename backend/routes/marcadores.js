import express from 'express';
import db from '../db.js';

const router = express.Router();

function round2(n) {
  return Math.round(Number(n) * 100) / 100;
}

function ensureMarcadoresTableWithIcono(cb) {
  db.run(
    `CREATE TABLE IF NOT EXISTS marcadores (
      ID_marcador INTEGER PRIMARY KEY AUTOINCREMENT,
      Nombre TEXT NOT NULL,
      Descripcion TEXT,
      Coordenadas TEXT NOT NULL,
      Icono TEXT,
      ExpiraEn INTEGER,
      Categoria TEXT
    )`,
    cb
  );
}

function ensureIconoColumn(cb) {
  db.run('ALTER TABLE marcadores ADD COLUMN Icono TEXT', (err) => {
    const msg = String(err && err.message ? err.message : err);
    if (err && !msg.includes('duplicate column') && !msg.includes('already exists')) {
      return cb(err);
    }
    return cb(null);
  });
}

function ensureExpiraEnColumn(cb) {
  db.run('ALTER TABLE marcadores ADD COLUMN ExpiraEn INTEGER', (err) => {
    const msg = String(err && err.message ? err.message : err);
    if (err && !msg.includes('duplicate column') && !msg.includes('already exists')) {
      return cb(err);
    }
    return cb(null);
  });
}

function ensureCategoriaColumn(cb) {
  db.run('ALTER TABLE marcadores ADD COLUMN Categoria TEXT', (err) => {
    const msg = String(err && err.message ? err.message : err);
    if (err && !msg.includes('duplicate column') && !msg.includes('already exists')) {
      return cb(err);
    }
    return cb(null);
  });
}

function shouldMigrateIconoColumn(err) {
  const msg = String(err && err.message ? err.message : err);
  const m = msg.toLowerCase();
  const missingColumn =
    m.includes('no such column') ||
    m.includes('has no column named') ||
    m.includes('no column named');
  return missingColumn && m.includes('icono');
}

function shouldMigrateExpiraEnColumn(err) {
  const msg = String(err && err.message ? err.message : err);
  const m = msg.toLowerCase();
  const missingColumn =
    m.includes('no such column') ||
    m.includes('has no column named') ||
    m.includes('no column named');
  return missingColumn && (m.includes('expiraen') || m.includes('expira_en') || m.includes('expira en'));
}

function shouldMigrateCategoriaColumn(err) {
  const msg = String(err && err.message ? err.message : err);
  const m = msg.toLowerCase();
  const missingColumn =
    m.includes('no such column') ||
    m.includes('has no column named') ||
    m.includes('no column named');
  return missingColumn && m.includes('categoria');
}

router.get('/', (req, res) => {
  const runQuery = () => {
    const now = Date.now();

    db.run(
      'DELETE FROM marcadores WHERE ExpiraEn IS NOT NULL AND ExpiraEn <= ?',
      [now],
      (deleteErr) => {
        if (deleteErr) {
          const msg = String(deleteErr && deleteErr.message ? deleteErr.message : deleteErr);
          if (msg.includes('no such table: marcadores')) {
            ensureMarcadoresTableWithIcono((createErr) => {
              if (createErr) return res.status(500).json({ error: 'DB_ERROR' });
              return res.json([]);
            });
            return;
          }
          if (shouldMigrateExpiraEnColumn(deleteErr)) {
            ensureExpiraEnColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runQuery();
            });
            return;
          }
          return res.status(500).json({ error: 'DB_ERROR' });
        }

        db.all(
          'SELECT ID_marcador, Nombre, Descripcion, Coordenadas, Icono, ExpiraEn, Categoria FROM marcadores WHERE ExpiraEn IS NULL OR ExpiraEn > ? ORDER BY ID_marcador DESC',
          [now],
          (err, rows) => {
            if (err) {
              const msg = String(err && err.message ? err.message : err);
              if (msg.includes('no such table: marcadores')) {
                ensureMarcadoresTableWithIcono((createErr) => {
                  if (createErr) return res.status(500).json({ error: 'DB_ERROR' });
                  return res.json([]);
                });
                return;
              }
              if (shouldMigrateIconoColumn(err)) {
                ensureIconoColumn((migErr) => {
                  if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
                  return runQuery();
                });
                return;
              }
              if (shouldMigrateExpiraEnColumn(err)) {
                ensureExpiraEnColumn((migErr) => {
                  if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
                  return runQuery();
                });
                return;
              }
              if (shouldMigrateCategoriaColumn(err)) {
                ensureCategoriaColumn((migErr) => {
                  if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
                  return runQuery();
                });
                return;
              }
              return res.status(500).json({ error: 'DB_ERROR' });
            }

            const result = rows.map((r) => ({
              id_marcador: r.ID_marcador,
              nombre: r.Nombre,
              descripcion: r.Descripcion,
              coordenadas: r.Coordenadas,
              icono: r.Icono ? String(r.Icono).trim() : null,
              expira_en: typeof r.ExpiraEn === 'number' ? r.ExpiraEn : null,
              categoria: r.Categoria ? String(r.Categoria).trim() : null
            }));

            return res.json(result);
          }
        );
      }
    );
  };

  return runQuery();
});

router.post('/', (req, res) => {
  const { nombre, descripcion, lat, lng, icono, duracionHoras, temporal, categoria } = req.body || {};

  if (!nombre || !String(nombre).trim()) {
    return res.status(400).json({ error: 'NOMBRE_VACIO' });
  }
  if (typeof lat !== 'number' || typeof lng !== 'number' || Number.isNaN(lat) || Number.isNaN(lng)) {
    return res.status(400).json({ error: 'COORDENADAS_INVALIDAS' });
  }

  const la = Number(lat);
  const ln = Number(lng);
  const coordStr = `${la},${ln}`;

  const now = Date.now();
  const DEFAULT_HOURS = 24;
  const MAX_HOURS = 24 * 365;

  const temporalBool = !(temporal === false || temporal === 'false' || temporal === 0 || temporal === '0');

  let expiraEn = null;
  if (temporalBool) {
    let hours = DEFAULT_HOURS;
    if (typeof duracionHoras === 'number' && Number.isFinite(duracionHoras)) {
      hours = duracionHoras;
    } else if (typeof duracionHoras === 'string' && duracionHoras.trim() !== '' && Number.isFinite(Number(duracionHoras))) {
      hours = Number(duracionHoras);
    }
    if (!Number.isFinite(hours) || hours <= 0) hours = DEFAULT_HOURS;
    if (hours > MAX_HOURS) hours = MAX_HOURS;
    expiraEn = now + Math.round(hours * 60 * 60 * 1000);
  }

  const runInsert = () => {
    const stmt = db.prepare('INSERT INTO marcadores (Nombre, Descripcion, Coordenadas, Icono, ExpiraEn, Categoria) VALUES (?, ?, ?, ?, ?, ?)');
    stmt.run(
      String(nombre).trim(),
      descripcion ? String(descripcion) : '',
      coordStr,
      icono ? String(icono).trim() : null,
      expiraEn,
      categoria ? String(categoria).trim() : null,
      function (err) {
        if (err) {
          const msg = String(err && err.message ? err.message : err);
          if (msg.includes('no such table: marcadores')) {
            ensureMarcadoresTableWithIcono((createErr) => {
              if (createErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runInsert();
            });
            return;
          }
          if (shouldMigrateIconoColumn(err)) {
            ensureIconoColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runInsert();
            });
            return;
          }
          if (shouldMigrateExpiraEnColumn(err)) {
            ensureExpiraEnColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runInsert();
            });
            return;
          }
          if (shouldMigrateCategoriaColumn(err)) {
            ensureCategoriaColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runInsert();
            });
            return;
          }
          return res.status(500).json({ error: 'DB_ERROR' });
        }

        return res.status(201).json({
          id_marcador: this.lastID,
          nombre: String(nombre).trim(),
          descripcion: descripcion ? String(descripcion) : '',
          coordenadas: coordStr,
          icono: icono ? String(icono).trim() : null,
          expira_en: expiraEn,
          categoria: categoria ? String(categoria).trim() : null
        });
      }
    );
    stmt.finalize();
  };

  runInsert();
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id) || id <= 0) return res.status(400).json({ error: 'ID_INVALIDO' });

  const runDelete = () => {
    db.run('DELETE FROM marcadores WHERE ID_marcador = ?', [id], function (err) {
      if (err) {
        const msg = String(err && err.message ? err.message : err);
        if (msg.includes('no such table: marcadores')) {
          ensureMarcadoresTableWithIcono((createErr) => {
            if (createErr) return res.status(500).json({ error: 'DB_ERROR' });
            return res.status(404).json({ error: 'NOT_FOUND' });
          });
          return;
        }
        return res.status(500).json({ error: 'DB_ERROR' });
      }
      if (!this.changes) return res.status(404).json({ error: 'NOT_FOUND' });
      return res.status(204).send();
    });
  };

  runDelete();
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id) || id <= 0) return res.status(400).json({ error: 'ID_INVALIDO' });

  const { nombre, descripcion, icono, duracionHoras, temporal, categoria } = req.body || {};
  if (!nombre || !String(nombre).trim()) {
    return res.status(400).json({ error: 'NOMBRE_VACIO' });
  }

  const now = Date.now();
  const DEFAULT_HOURS = 24;
  const MAX_HOURS = 24 * 365;

  const temporalBool = !(temporal === false || temporal === 'false' || temporal === 0 || temporal === '0');

  let expiraEn = null;
  if (temporalBool) {
    let hours = DEFAULT_HOURS;
    if (typeof duracionHoras === 'number' && Number.isFinite(duracionHoras)) {
      hours = duracionHoras;
    } else if (typeof duracionHoras === 'string' && duracionHoras.trim() !== '' && Number.isFinite(Number(duracionHoras))) {
      hours = Number(duracionHoras);
    }
    if (!Number.isFinite(hours) || hours <= 0) hours = DEFAULT_HOURS;
    if (hours > MAX_HOURS) hours = MAX_HOURS;
    expiraEn = now + Math.round(hours * 60 * 60 * 1000);
  }

  const runUpdate = () => {
    db.run(
      'UPDATE marcadores SET Nombre = ?, Descripcion = ?, Icono = ?, ExpiraEn = ?, Categoria = ? WHERE ID_marcador = ?',
      [String(nombre).trim(), descripcion ? String(descripcion) : '', icono ? String(icono).trim() : null, expiraEn, categoria ? String(categoria).trim() : null, id],
      function (err) {
        if (err) {
          const msg = String(err && err.message ? err.message : err);
          if (msg.includes('no such table: marcadores')) {
            ensureMarcadoresTableWithIcono((createErr) => {
              if (createErr) return res.status(500).json({ error: 'DB_ERROR' });
              return res.status(404).json({ error: 'NOT_FOUND' });
            });
            return;
          }
          if (shouldMigrateIconoColumn(err)) {
            ensureIconoColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runUpdate();
            });
            return;
          }
          if (shouldMigrateExpiraEnColumn(err)) {
            ensureExpiraEnColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runUpdate();
            });
            return;
          }
          if (shouldMigrateCategoriaColumn(err)) {
            ensureCategoriaColumn((migErr) => {
              if (migErr) return res.status(500).json({ error: 'DB_ERROR' });
              return runUpdate();
            });
            return;
          }
          return res.status(500).json({ error: 'DB_ERROR' });
        }
        if (!this.changes) return res.status(404).json({ error: 'NOT_FOUND' });
        return res.status(200).json({
          id_marcador: id,
          nombre: String(nombre).trim(),
          descripcion: descripcion ? String(descripcion) : '',
          icono: icono ? String(icono).trim() : null,
          expira_en: expiraEn,
          categoria: categoria ? String(categoria).trim() : null
        });
      }
    );
  };

  runUpdate();
});

export default router;

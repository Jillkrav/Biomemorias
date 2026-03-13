import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET /api/localizaciones
router.get('/', (req, res) => {
  db.all(
    'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas, Vertices FROM localizaciones',
    [],
    (err, rows) => {
      if (err) {
        const msg = String(err && err.message ? err.message : err);
        if (msg.includes('no such column: Vertices') || msg.includes('no column named Vertices')) {
          // Create Vertices column and retry once
          db.run("ALTER TABLE localizaciones ADD COLUMN Vertices TEXT", (alterErr) => {
            if (alterErr) {
              console.error('SQLite alter table error on GET:', alterErr);
              return res.status(500).json({ error: 'DB_ERROR' });
            }
            db.all(
              'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas, Vertices FROM localizaciones',
              [],
              (retryErr, retryRows) => {
                if (retryErr) {
                  console.error('DB error on GET all after ALTER:', retryErr);
                  return res.status(500).json({ error: 'DB_ERROR' });
                }
                const result = retryRows.map((r) => ({
                  ID_localizacion: r.ID_localizacion,
                  Nombre_localizacion: r.Nombre_localizacion,
                  Cantidad: r.Cantidad,
                  Coordenadas: r.Coordenadas,
                  Vertices: r.Vertices
                }));
                return res.json(result);
              }
            );
          });
          return;
        }
        console.error('DB error on GET all:', err);
        return res.status(500).json({ error: 'DB_ERROR' });
      }
      const result = rows.map((r) => ({
        ID_localizacion: r.ID_localizacion,
        Nombre_localizacion: r.Nombre_localizacion,
        Cantidad: r.Cantidad,
        Coordenadas: r.Coordenadas,
        Vertices: r.Vertices
      }));
      res.json(result);
    }
  );
});

// POST /api/localizaciones
router.post('/', (req, res) => {
  const { nombre_localizacion, coordenadas, vertices } = req.body || {};

  if (!nombre_localizacion || !nombre_localizacion.trim()) {
    return res.status(400).json({ error: 'NOMBRE_VACIO' });
  }
  if (!coordenadas || !coordenadas.trim()) {
    return res.status(400).json({ error: 'COORDENADAS_INVALIDAS' });
  }
  if (!vertices || !Array.isArray(vertices) || vertices.length < 3) {
    return res.status(400).json({ error: 'VERTICES_INVALIDOS' });
  }

  // Validate uniqueness
  db.get(
    'SELECT 1 as exists FROM localizaciones WHERE Nombre_localizacion = ?',
    [nombre_localizacion.trim()],
    (err, row) => {
      if (err) {
        console.error('DB error on uniqueness check:', err);
        return res.status(500).json({ error: 'DB_ERROR' });
      }
      if (row) {
        return res.status(409).json({ error: 'NOMBRE_DUPLICADO' });
      }

      const stmt = db.prepare(
        'INSERT INTO localizaciones (Nombre_localizacion, Cantidad, Coordenadas, Vertices) VALUES (?, ?, ?, ?)'
      );
      stmt.run(
        nombre_localizacion.trim(),
        0,
        coordenadas.trim(),
        JSON.stringify(vertices),
        function (insertErr) {
          if (insertErr) {
            const msg = String(insertErr && insertErr.message ? insertErr.message : insertErr);
            if (msg.includes('no column named Vertices') || msg.includes('no such column: Vertices') || msg.includes('has no column named Vertices')) {
              db.run("ALTER TABLE localizaciones ADD COLUMN Vertices TEXT", (alterErr) => {
                if (alterErr) {
                  console.error('SQLite alter table error during POST:', alterErr);
                  return res.status(500).json({ error: 'DB_ERROR' });
                }
                const retryStmt = db.prepare('INSERT INTO localizaciones (Nombre_localizacion, Cantidad, Coordenadas, Vertices) VALUES (?, ?, ?, ?)');
                retryStmt.run(
                  nombre_localizacion.trim(),
                  0,
                  coordenadas.trim(),
                  JSON.stringify(vertices),
                  function (retryErr) {
                    if (retryErr) {
                      console.error('DB error on INSERT retry:', retryErr);
                      return res.status(500).json({ error: 'DB_ERROR' });
                    }
                    const id = this.lastID;
                    db.get(
                      'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas, Vertices FROM localizaciones WHERE ID_localizacion = ?',
                      [id],
                      (gErr, inserted) => {
                        if (gErr || !inserted) {
                          console.error('DB error on SELECT after INSERT (retry):', gErr);
                          return res.status(500).json({ error: 'DB_ERROR' });
                        }
                        res.status(201).json(inserted);
                      }
                    );
                  }
                );
                retryStmt.finalize();
              });
              return;
            }
            console.error('DB error on INSERT:', insertErr);
            return res.status(500).json({ error: 'DB_ERROR' });
          }
          const id = this.lastID;
          db.get(
            'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas, Vertices FROM localizaciones WHERE ID_localizacion = ?',
            [id],
            (gErr, inserted) => {
              if (gErr || !inserted) {
                console.error('DB error on SELECT after INSERT:', gErr);
                return res.status(500).json({ error: 'DB_ERROR' });
              }
              res.status(201).json(inserted);
            }
          );
        }
      );
      stmt.finalize();
    }
  );
});

// PUT /api/localizaciones/:id/incrementar
router.put('/:id/incrementar', (req, res) => {
  const { id } = req.params;
  db.run(
    'UPDATE localizaciones SET Cantidad = Cantidad + 1 WHERE ID_localizacion = ?',
    [id],
    function (err) {
      if (err) {
        console.error('DB error on UPDATE incrementar:', err);
        return res.status(500).json({ error: 'DB_ERROR' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'NO_ENCONTRADO' });
      }
      db.get(
        'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas, Vertices FROM localizaciones WHERE ID_localizacion = ?',
        [id],
        (gErr, row) => {
          if (gErr || !row) {
            console.error('DB error on SELECT after UPDATE:', gErr);
            return res.status(500).json({ error: 'DB_ERROR' });
          }
          res.json(row);
        }
      );
    }
  );
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre_localizacion, cantidad, coordenadas, vertices } = req.body || {};

  const fields = [];
  const values = [];

  if (typeof nombre_localizacion !== 'undefined') {
    const n = String(nombre_localizacion).trim();
    if (!n) return res.status(400).json({ error: 'NOMBRE_VACIO' });
    fields.push('Nombre_localizacion = ?');
    values.push(n);
  }

  if (typeof cantidad !== 'undefined') {
    const c = Number.parseInt(cantidad, 10);
    if (Number.isNaN(c)) return res.status(400).json({ error: 'CANTIDAD_INVALIDA' });
    fields.push('Cantidad = ?');
    values.push(c);
  }

  if (typeof coordenadas !== 'undefined') {
    const co = String(coordenadas).trim();
    if (!co) return res.status(400).json({ error: 'COORDENADAS_INVALIDAS' });
    fields.push('Coordenadas = ?');
    values.push(co);
  }

  if (typeof vertices !== 'undefined') {
    if (!Array.isArray(vertices) || vertices.length < 3) {
      return res.status(400).json({ error: 'VERTICES_INVALIDOS' });
    }
    fields.push('Vertices = ?');
    values.push(JSON.stringify(vertices));
  }

  if (fields.length === 0) {
    return res.status(400).json({ error: 'SIN_CAMBIOS' });
  }

  const doUpdate = () => {
    db.run(
      `UPDATE localizaciones SET ${fields.join(', ')} WHERE ID_localizacion = ?`,
      [...values, id],
      function (err) {
        if (err) {
          const msg = String(err && err.message ? err.message : err);
          if (msg.includes('no column named Vertices') || msg.includes('no such column: Vertices') || msg.includes('has no column named Vertices')) {
            db.run("ALTER TABLE localizaciones ADD COLUMN Vertices TEXT", (alterErr) => {
              if (alterErr) {
                console.error('SQLite alter table error during UPDATE:', alterErr);
                return res.status(500).json({ error: 'DB_ERROR' });
              }
              return doUpdate();
            });
            return;
          }
          console.error('DB error on UPDATE:', err);
          return res.status(500).json({ error: 'DB_ERROR' });
        }
        if (this.changes === 0) {
          return res.status(404).json({ error: 'NO_ENCONTRADO' });
        }
        db.get(
          'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas, Vertices FROM localizaciones WHERE ID_localizacion = ?',
          [id],
          (gErr, row) => {
            if (gErr || !row) {
              console.error('DB error on SELECT after UPDATE:', gErr);
              return res.status(500).json({ error: 'DB_ERROR' });
            }
            res.json(row);
          }
        );
      }
    );
  };

  doUpdate();
});

// GET /api/localizaciones/export
router.get('/export', (req, res) => {
  db.all(
    'SELECT ID_localizacion, Nombre_localizacion, Cantidad, Coordenadas FROM localizaciones',
    [],
    (err, rows) => {
      if (err) {
        console.error('DB error on EXPORT:', err);
        return res.status(500).json({ error: 'DB_ERROR' });
      }
      const header = 'ID_localizacion,Nombre_localizacion,Cantidad,Coordenadas\n';
      const csvBody = rows
        .map((r) =>
          [
            r.ID_localizacion,
            JSON.stringify(r.Nombre_localizacion),
            r.Cantidad,
            JSON.stringify(r.Coordenadas)
          ].join(',')
        )
        .join('\n');
      const csv = header + csvBody + '\n';
      const ts = new Date().toISOString().slice(0, 10);
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="localizaciones_${ts}.csv"`);
      res.status(200).send(Buffer.from('\uFEFF' + csv, 'utf8'));
    }
  );
});

// POST /api/localizaciones/reindex?confirm=1
// Rebuilds the table so that IDs follow the alphabetical order of Nombre_localizacion
router.post('/reindex', (req, res) => {
  const confirm = req.query.confirm === '1' || req.body?.confirm === 1 || req.body?.confirm === '1';
  if (!confirm) return res.status(400).json({ error: 'CONFIRM_REQUIRED' });

  const steps = [
    "PRAGMA foreign_keys=OFF;",
    `BEGIN TRANSACTION;`,
    `CREATE TABLE IF NOT EXISTS localizaciones_tmp (
      ID_localizacion INTEGER PRIMARY KEY AUTOINCREMENT,
      Nombre_localizacion TEXT UNIQUE NOT NULL,
      Cantidad INTEGER DEFAULT 0,
      Coordenadas TEXT NOT NULL,
      Vertices TEXT
    );`,
    `INSERT INTO localizaciones_tmp (Nombre_localizacion, Cantidad, Coordenadas, Vertices)
     SELECT Nombre_localizacion, Cantidad, Coordenadas, Vertices
     FROM localizaciones
     ORDER BY Nombre_localizacion COLLATE NOCASE;`,
    `DROP TABLE localizaciones;`,
    `ALTER TABLE localizaciones_tmp RENAME TO localizaciones;`,
    `COMMIT;`,
    "PRAGMA foreign_keys=ON;"
  ];

  db.serialize(() => {
    const runStep = (idx = 0) => {
      if (idx >= steps.length) {
        return res.json({ status: 'OK' });
      }
      db.run(steps[idx], function (err) {
        if (err) {
          console.error('Reindex error at step', idx, err);
          return res.status(500).json({ error: 'DB_ERROR', step: idx });
        }
        runStep(idx + 1);
      });
    };
    runStep(0);
  });
});

// DELETE /api/localizaciones/:id (optional)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM localizaciones WHERE ID_localizacion = ?', [id], function (err) {
    if (err) {
      console.error('DB error on DELETE:', err);
      return res.status(500).json({ error: 'DB_ERROR' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'NO_ENCONTRADO' });
    }
    res.status(204).send();
  });
});

export default router;

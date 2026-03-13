import express from 'express';
import { Localizacion } from '../mongodb.js';

const router = express.Router();

// GET /api/localizaciones
router.get('/', async (req, res) => {
  try {
    const rows = await Localizacion.find({});
    const result = rows.map((r) => ({
      ID_localizacion: r._id,
      Nombre_localizacion: r.Nombre_localizacion,
      Cantidad: r.Cantidad,
      Coordenadas: r.Coordenadas,
      Vertices: r.Vertices
    }));
    res.json(result);
  } catch (err) {
    console.error('DB error on GET all:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

// POST /api/localizaciones
router.post('/', async (req, res) => {
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

  try {
    const existing = await Localizacion.findOne({ Nombre_localizacion: nombre_localizacion.trim() });
    if (existing) {
      return res.status(409).json({ error: 'NOMBRE_DUPLICADO' });
    }

    const newLoc = await Localizacion.create({
      Nombre_localizacion: nombre_localizacion.trim(),
      Cantidad: 0,
      Coordenadas: coordenadas.trim(),
      Vertices: JSON.stringify(vertices)
    });

    res.status(201).json({
      ID_localizacion: newLoc._id,
      Nombre_localizacion: newLoc.Nombre_localizacion,
      Cantidad: newLoc.Cantidad,
      Coordenadas: newLoc.Coordenadas,
      Vertices: newLoc.Vertices
    });
  } catch (err) {
    console.error('DB error on INSERT:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

// PUT /api/localizaciones/:id/incrementar
router.put('/:id/incrementar', async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Localizacion.findByIdAndUpdate(
      id,
      { $inc: { Cantidad: 1 } },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'NO_ENCONTRADO' });
    }
    res.json({
      ID_localizacion: updated._id,
      Nombre_localizacion: updated.Nombre_localizacion,
      Cantidad: updated.Cantidad,
      Coordenadas: updated.Coordenadas,
      Vertices: updated.Vertices
    });
  } catch (err) {
    console.error('DB error on UPDATE incrementar:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre_localizacion, cantidad, coordenadas, vertices } = req.body || {};

  const update = {};
  if (typeof nombre_localizacion !== 'undefined') {
    const n = String(nombre_localizacion).trim();
    if (!n) return res.status(400).json({ error: 'NOMBRE_VACIO' });
    update.Nombre_localizacion = n;
  }
  if (typeof cantidad !== 'undefined') {
    const c = Number.parseInt(cantidad, 10);
    if (Number.isNaN(c)) return res.status(400).json({ error: 'CANTIDAD_INVALIDA' });
    update.Cantidad = c;
  }
  if (typeof coordenadas !== 'undefined') {
    const co = String(coordenadas).trim();
    if (!co) return res.status(400).json({ error: 'COORDENADAS_INVALIDAS' });
    update.Coordenadas = co;
  }
  if (typeof vertices !== 'undefined') {
    if (!Array.isArray(vertices) || vertices.length < 3) {
      return res.status(400).json({ error: 'VERTICES_INVALIDOS' });
    }
    update.Vertices = JSON.stringify(vertices);
  }

  if (Object.keys(update).length === 0) {
    return res.status(400).json({ error: 'SIN_CAMBIOS' });
  }

  try {
    const updated = await Localizacion.findByIdAndUpdate(id, update, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'NO_ENCONTRADO' });
    }
    res.json({
      ID_localizacion: updated._id,
      Nombre_localizacion: updated.Nombre_localizacion,
      Cantidad: updated.Cantidad,
      Coordenadas: updated.Coordenadas,
      Vertices: updated.Vertices
    });
  } catch (err) {
    console.error('DB error on UPDATE:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

// GET /api/localizaciones/export
router.get('/export', async (req, res) => {
  try {
    const rows = await Localizacion.find({});
    const header = 'ID_localizacion,Nombre_localizacion,Cantidad,Coordenadas\n';
    const csvBody = rows
      .map((r) =>
        [
          r._id,
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
  } catch (err) {
    console.error('DB error on EXPORT:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

// POST /api/localizaciones/reindex?confirm=1
// In MongoDB, we don't really need to reindex for IDs, but we can return OK for compatibility
router.post('/reindex', (req, res) => {
  res.json({ status: 'OK', message: 'Reindex not needed for MongoDB IDs' });
});

// DELETE /api/localizaciones/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Localizacion.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'NO_ENCONTRADO' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('DB error on DELETE:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

export default router;

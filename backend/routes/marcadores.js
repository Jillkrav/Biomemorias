import express from 'express';
import { Marcador } from '../mongodb.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const now = Date.now();
  try {
    // Delete expired markers
    await Marcador.deleteMany({ ExpiraEn: { $ne: null, $lte: now } });

    // Find active markers
    const rows = await Marcador.find({
      $or: [{ ExpiraEn: null }, { ExpiraEn: { $gt: now } }]
    }).sort({ _id: -1 });

    const result = rows.map((r) => ({
      id_marcador: r._id,
      nombre: r.Nombre,
      descripcion: r.Descripcion,
      coordenadas: r.Coordenadas,
      icono: r.Icono ? String(r.Icono).trim() : null,
      expira_en: typeof r.ExpiraEn === 'number' ? r.ExpiraEn : null,
      categoria: r.Categoria ? String(r.Categoria).trim() : null
    }));

    res.json(result);
  } catch (err) {
    console.error('DB error on GET all:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

router.post('/', async (req, res) => {
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

  try {
    const newMarcador = await Marcador.create({
      Nombre: String(nombre).trim(),
      Descripcion: descripcion ? String(descripcion) : '',
      Coordenadas: coordStr,
      Icono: icono ? String(icono).trim() : null,
      ExpiraEn: expiraEn,
      Categoria: categoria ? String(categoria).trim() : null
    });

    res.status(201).json({
      id_marcador: newMarcador._id,
      nombre: newMarcador.Nombre,
      descripcion: newMarcador.Descripcion,
      coordenadas: newMarcador.Coordenadas,
      icono: newMarcador.Icono,
      expira_en: newMarcador.ExpiraEn,
      categoria: newMarcador.Categoria
    });
  } catch (err) {
    console.error('DB error on INSERT:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Marcador.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'NOT_FOUND' });
    res.status(204).send();
  } catch (err) {
    console.error('DB error on DELETE:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
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

  try {
    const updated = await Marcador.findByIdAndUpdate(
      id,
      {
        Nombre: String(nombre).trim(),
        Descripcion: descripcion ? String(descripcion) : '',
        Icono: icono ? String(icono).trim() : null,
        ExpiraEn: expiraEn,
        Categoria: categoria ? String(categoria).trim() : null
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'NOT_FOUND' });

    res.status(200).json({
      id_marcador: updated._id,
      nombre: updated.Nombre,
      descripcion: updated.Descripcion,
      icono: updated.Icono,
      expira_en: updated.ExpiraEn,
      categoria: updated.Categoria
    });
  } catch (err) {
    console.error('DB error on UPDATE:', err);
    res.status(500).json({ error: 'DB_ERROR' });
  }
});

export default router;

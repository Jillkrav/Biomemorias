import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function AdminLocalizaciones() {
  const { toast } = useToast();
  const [authorized, setAuthorized] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [searchParams] = useSearchParams();
  const requiredKey = useMemo(() => (import.meta.env.VITE_ADMIN_KEY || 'quintacosta'), []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [creating, setCreating] = useState({ nombre_localizacion: '', coordenadas: '', vertices: '[]' });

  const [editingId, setEditingId] = useState(null);
  const [edit, setEdit] = useState({ nombre_localizacion: '', cantidad: '', coordenadas: '', vertices: '' });

  useEffect(() => {
    const key = searchParams.get('key');
    if (localStorage.getItem('admin_ok') === '1' || (key && key === requiredKey)) {
      localStorage.setItem('admin_ok', '1');
      setAuthorized(true);
    }
  }, [searchParams, requiredKey]);

  async function fetchJSON(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) {
      let data = null;
      try { data = await res.json(); } catch {}
      const err = new Error('HTTP ' + res.status);
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return res.json();
  }

  async function load() {
    setLoading(true);
    try {
      const data = await fetchJSON('/api/localizaciones');
      setItems(data);
    } catch (e) {
      toast({ title: 'Error', description: 'No se pudo cargar', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (authorized) load();
  }, [authorized]);

  function startEdit(row) {
    setEditingId(row.ID_localizacion);
    let vStr = '';
    if (typeof row.Vertices === 'string') vStr = row.Vertices || '[]';
    else if (row.Vertices) vStr = JSON.stringify(row.Vertices);
    else vStr = '[]';
    setEdit({
      nombre_localizacion: row.Nombre_localizacion || '',
      cantidad: String(row.Cantidad ?? ''),
      coordenadas: row.Coordenadas || '',
      vertices: vStr,
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEdit({ nombre_localizacion: '', cantidad: '', coordenadas: '', vertices: '' });
  }

  async function saveEdit(id) {
    const original = items.find((x) => x.ID_localizacion === id);
    if (!original) return;

    const payload = {};
    const n = String(edit.nombre_localizacion ?? '').trim();
    if (n && n !== original.Nombre_localizacion) payload.nombre_localizacion = n;

    if (edit.cantidad !== '' && Number.parseInt(edit.cantidad, 10) !== Number(original.Cantidad)) {
      const c = Number.parseInt(edit.cantidad, 10);
      if (Number.isNaN(c)) {
        toast({ title: 'Error', description: 'Cantidad inválida', variant: 'destructive' });
        return;
      }
      payload.cantidad = c;
    }

    const co = String(edit.coordenadas ?? '').trim();
    if (co && co !== String(original.Coordenadas || '')) payload.coordenadas = co;

    if (typeof edit.vertices !== 'undefined') {
      let newV = null;
      try { newV = JSON.parse(edit.vertices); } catch {
        toast({ title: 'Error', description: 'Vertices JSON inválido', variant: 'destructive' });
        return;
      }
      let oldV = null;
      try { oldV = typeof original.Vertices === 'string' ? JSON.parse(original.Vertices) : original.Vertices; } catch { oldV = original.Vertices; }
      if (JSON.stringify(newV) !== JSON.stringify(oldV)) payload.vertices = newV;
    }

    if (Object.keys(payload).length === 0) {
      toast({ title: 'Sin cambios', description: 'No hay cambios para guardar' });
      return;
    }

    try {
      const updated = await fetchJSON(`/api/localizaciones/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setItems((prev) => prev.map((x) => (x.ID_localizacion === id ? updated : x)));
      cancelEdit();
      toast({ title: 'Guardado', description: 'Cambios aplicados' });
    } catch (e) {
      toast({ title: 'Error', description: 'No se pudo guardar', variant: 'destructive' });
    }
  }

  async function del(id) {
    if (!confirm('¿Eliminar esta localización?')) return;
    try {
      await fetchJSON(`/api/localizaciones/${id}`, { method: 'DELETE' });
      setItems((prev) => prev.filter((x) => x.ID_localizacion !== id));
      toast({ title: 'Eliminado', description: 'Localización eliminada' });
    } catch (e) {
      toast({ title: 'Error', description: 'No se pudo eliminar', variant: 'destructive' });
    }
  }

  async function inc(id) {
    try {
      const updated = await fetchJSON(`/api/localizaciones/${id}/incrementar`, { method: 'PUT' });
      setItems((prev) => prev.map((x) => (x.ID_localizacion === id ? updated : x)));
    } catch (e) {
      toast({ title: 'Error', description: 'No se pudo incrementar', variant: 'destructive' });
    }
  }

  async function createOne() {
    const nombre = String(creating.nombre_localizacion || '').trim();
    const coords = String(creating.coordenadas || '').trim();
    let verts = null;
    try { verts = JSON.parse(creating.vertices || '[]'); } catch {}
    if (!nombre) { toast({ title: 'Error', description: 'Nombre requerido', variant: 'destructive' }); return; }
    if (!coords) { toast({ title: 'Error', description: 'Coordenadas requeridas', variant: 'destructive' }); return; }
    if (!Array.isArray(verts) || verts.length < 3) { toast({ title: 'Error', description: 'Vertices debe ser un arreglo con al menos 3 puntos', variant: 'destructive' }); return; }
    try {
      const inserted = await fetchJSON('/api/localizaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_localizacion: nombre, coordenadas: coords, vertices: verts }),
      });
      setItems((prev) => [inserted, ...prev]);
      setCreating({ nombre_localizacion: '', coordenadas: '', vertices: '[]' });
      toast({ title: 'Creado', description: 'Localización creada' });
    } catch (e) {
      const msg = e?.data?.error === 'NOMBRE_DUPLICADO' ? 'Nombre duplicado' : 'No se pudo crear';
      toast({ title: 'Error', description: msg, variant: 'destructive' });
    }
  }

  async function reindex() {
    if (!confirm('¿Reindexar por nombre?')) return;
    try {
      await fetchJSON('/api/localizaciones/reindex?confirm=1', { method: 'POST' });
      await load();
      toast({ title: 'Listo', description: 'Reindexado' });
    } catch (e) {
      toast({ title: 'Error', description: 'No se pudo reindexar', variant: 'destructive' });
    }
  }

  function unlock() {
    if (keyInput === requiredKey) {
      localStorage.setItem('admin_ok', '1');
      setAuthorized(true);
    } else {
      toast({ title: 'Error', description: 'Clave incorrecta', variant: 'destructive' });
    }
  }

  if (!authorized) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-4 bg-white p-6 rounded-md shadow">
          <div className="text-lg font-semibold">Acceso</div>
          <div className="space-y-2">
            <Label htmlFor="key">Clave</Label>
            <Input id="key" type="password" value={keyInput} onChange={(e) => setKeyInput(e.target.value)} placeholder="Ingrese clave" />
          </div>
          <div className="flex gap-2">
            <Button onClick={unlock}>Acceder</Button>
            <Button variant="outline" asChild><Link to="/">Inicio</Link></Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto text-slate-900">
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-bold">Admin Localizaciones</div>
        <div className="flex gap-2">
          <Button asChild variant="outline"><a href="/api/localizaciones/export">Exportar CSV</a></Button>
          <Button variant="secondary" onClick={reindex}>Reindexar</Button>
        </div>
      </div>

      <div className="mb-8 border rounded-md p-4 bg-white">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" value={creating.nombre_localizacion} onChange={(e) => setCreating((s) => ({ ...s, nombre_localizacion: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="coords">Coordenadas</Label>
            <Input id="coords" value={creating.coordenadas} onChange={(e) => setCreating((s) => ({ ...s, coordenadas: e.target.value }))} placeholder="lat,lng o formato esperado" />
          </div>
          <div className="md:col-span-3">
            <Label htmlFor="verts">Vertices (JSON)</Label>
            <Textarea id="verts" rows={3} value={creating.vertices} onChange={(e) => setCreating((s) => ({ ...s, vertices: e.target.value }))} />
          </div>
        </div>
        <div className="mt-3">
          <Button onClick={createOne}>Crear</Button>
        </div>
      </div>

      <div className="border rounded-md overflow-x-auto bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">Cantidad</th>
              <th className="p-2 text-left">Coordenadas</th>
              <th className="p-2 text-left">Vertices</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td className="p-3" colSpan={6}>Cargando...</td></tr>
            ) : items.length === 0 ? (
              <tr><td className="p-3" colSpan={6}>Sin datos</td></tr>
            ) : (
              items.map((row) => (
                <tr key={row.ID_localizacion} className="border-t">
                  <td className="p-2 align-top">{row.ID_localizacion}</td>
                  <td className="p-2 align-top">
                    {editingId === row.ID_localizacion ? (
                      <Input value={edit.nombre_localizacion} onChange={(e) => setEdit((s) => ({ ...s, nombre_localizacion: e.target.value }))} />
                    ) : (
                      <div>{row.Nombre_localizacion}</div>
                    )}
                  </td>
                  <td className="p-2 align-top w-24">
                    {editingId === row.ID_localizacion ? (
                      <Input type="number" value={edit.cantidad} onChange={(e) => setEdit((s) => ({ ...s, cantidad: e.target.value }))} />
                    ) : (
                      <div>{row.Cantidad}</div>
                    )}
                  </td>
                  <td className="p-2 align-top min-w-[220px]">
                    {editingId === row.ID_localizacion ? (
                      <Input value={edit.coordenadas} onChange={(e) => setEdit((s) => ({ ...s, coordenadas: e.target.value }))} />
                    ) : (
                      <div className="truncate max-w-[320px]" title={row.Coordenadas}>{row.Coordenadas}</div>
                    )}
                  </td>
                  <td className="p-2 align-top min-w-[240px]">
                    {editingId === row.ID_localizacion ? (
                      <Textarea rows={3} value={edit.vertices} onChange={(e) => setEdit((s) => ({ ...s, vertices: e.target.value }))} />
                    ) : (
                      <div className="truncate max-w-[360px]" title={String(row.Vertices || '')}>{String(row.Vertices || '')}</div>
                    )}
                  </td>
                  <td className="p-2 align-top">
                    {editingId === row.ID_localizacion ? (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => saveEdit(row.ID_localizacion)}>Guardar</Button>
                        <Button size="sm" variant="outline" onClick={cancelEdit}>Cancelar</Button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => startEdit(row)}>Editar</Button>
                        <Button size="sm" variant="secondary" onClick={() => inc(row.ID_localizacion)}>+1</Button>
                        <Button size="sm" variant="destructive" onClick={() => del(row.ID_localizacion)}>Eliminar</Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminLocalizaciones;

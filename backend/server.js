import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import localizacionesRoutes from './routes/localizaciones.js';
import marcadoresRoutes from './routes/marcadores.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/localizaciones', localizacionesRoutes);
app.use('/api/marcadores', marcadoresRoutes);

const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

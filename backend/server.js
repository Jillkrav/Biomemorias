import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './mongodb.js';
import localizacionesRoutes from './routes/localizaciones.js';
import marcadoresRoutes from './routes/marcadores.js';
import githubRoutes from './routes/github.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Registramos las rutas de la API ANTES de cualquier estático o comodín
app.use('/api/localizaciones', localizacionesRoutes);
app.use('/api/marcadores', marcadoresRoutes);
app.use('/api/github', githubRoutes);

// Connect to MongoDB
connectDB();

const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  // Si la petición empieza con /api/ y llegó aquí, es que no existe el endpoint
  if (req.originalUrl.startsWith('/api/')) {
    return res.status(404).json({ error: `API route not found: ${req.originalUrl}` });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

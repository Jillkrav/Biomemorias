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

const PORT = 3003;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

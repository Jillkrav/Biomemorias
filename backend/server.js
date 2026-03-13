import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './mongodb.js';
import localizacionesRoutes from './routes/localizaciones.js';
import marcadoresRoutes from './routes/marcadores.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/localizaciones', localizacionesRoutes);
app.use('/api/marcadores', marcadoresRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

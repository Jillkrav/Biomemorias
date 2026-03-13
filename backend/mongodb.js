import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/biomemorias';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

// Localizacion Schema
const localizacionSchema = new mongoose.Schema({
  Nombre_localizacion: { type: String, unique: true, required: true },
  Cantidad: { type: Number, default: 0 },
  Coordenadas: { type: String, required: true },
  Vertices: { type: String } // Stored as JSON string to maintain compatibility with existing logic
});

export const Localizacion = mongoose.model('Localizacion', localizacionSchema);

// Marcador Schema
const marcadorSchema = new mongoose.Schema({
  Nombre: { type: String, required: true },
  Descripcion: { type: String },
  Coordenadas: { type: String, required: true },
  Icono: { type: String },
  ExpiraEn: { type: Number },
  Categoria: { type: String }
});

export const Marcador = mongoose.model('Marcador', marcadorSchema);

export default connectDB;

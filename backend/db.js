import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, 'localizaciones.db');
const sqlite = sqlite3.verbose();

const db = new sqlite.Database(DB_PATH, (err) => {
  if (err) {
    console.error('SQLite connection error:', err);
  } else {
    console.log('SQLite connected at', DB_PATH);
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS localizaciones (
      ID_localizacion INTEGER PRIMARY KEY AUTOINCREMENT,
      Nombre_localizacion TEXT UNIQUE NOT NULL,
      Cantidad INTEGER DEFAULT 0,
      Coordenadas TEXT NOT NULL
    )`
  );
  // Ensure Vertices column exists (for storing polygon vertices)
  db.all("PRAGMA table_info('localizaciones')", (err, rows) => {
    if (err) {
      console.error('SQLite PRAGMA error:', err);
      return;
    }
    const hasVertices = rows.some((r) => r.name === 'Vertices');
    if (!hasVertices) {
      db.run("ALTER TABLE localizaciones ADD COLUMN Vertices TEXT", (alterErr) => {
        if (alterErr) {
          console.error('SQLite alter table error:', alterErr);
        } else {
          console.log('SQLite: added Vertices column');
        }
      });
    }
  });
});

export default db;

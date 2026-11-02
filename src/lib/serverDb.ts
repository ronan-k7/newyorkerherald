import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'src', 'data', 'db');

function ensureDbDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

export function readDbFile<T>(filename: string, defaultValue: T): T {
  try {
    ensureDbDir();
    const filePath = path.join(DB_DIR, filename);
    if (!fs.existsSync(filePath)) {
      writeDbFile(filename, defaultValue);
      return defaultValue;
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (error) {
    console.error(`Error reading DB file ${filename}:`, error);
    return defaultValue;
  }
}

export function writeDbFile<T>(filename: string, data: T): boolean {
  try {
    ensureDbDir();
    const filePath = path.join(DB_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing DB file ${filename}:`, error);
    return false;
  }
}

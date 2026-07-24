import 'dotenv/config';
import path from 'node:path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const dbPath = process.env.DATABASE_URL ?? './cardapio.db';

export const db = await open({
    filename: path.resolve(dbPath),
    driver: sqlite3.Database,
});

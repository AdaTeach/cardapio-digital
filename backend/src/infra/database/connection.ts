import 'dotenv/config';
import path from 'node:path';
import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';

let db: Database | null = null;

export async function getDatabase(): Promise<Database> {
    if (db) return db;

    const dbPath = process.env.DATABASE_URL ?? './cardapio.db';

    db = await open({
        filename: path.resolve(dbPath),
        driver: sqlite3.Database,
    });

    return db;
}

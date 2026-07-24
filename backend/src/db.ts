import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

let db: Database;

export async function getDb(): Promise<Database> {
    if (!db) {
        db = await open({
            filename: path.resolve(__dirname, '..', 'cardapio.db'),
            driver: sqlite3.Database,
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS produto (
                nome      TEXT    NOT NULL PRIMARY KEY CHECK(length(nome) <= 50),
                descricao TEXT             CHECK(length(descricao) <= 255),
                detalhes  TEXT             CHECK(length(detalhes) <= 255),
                valor     REAL    NOT NULL
            )
        `);
    }

    return db;
}

import { db } from '../connection';

export async function up(): Promise<void> {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS mesas (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            numero      INTEGER NOT NULL,
            capacidade  INTEGER NOT NULL,
            status      TEXT    NOT NULL DEFAULT 'disponivel'
        )
    `);
}

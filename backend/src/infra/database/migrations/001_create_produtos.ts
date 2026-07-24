import { db } from '../connection';

export async function up(): Promise<void> {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS produtos (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            nome        TEXT    NOT NULL,
            descricao   TEXT    NOT NULL,
            detalhe    TEXT
        )
    `);
}

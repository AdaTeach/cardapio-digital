import { Database } from 'sqlite';

export async function up(db: Database): Promise<void> {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            nome        TEXT    NOT NULL,
            descricao   TEXT    NOT NULL,
            detalhes    TEXT
        )
    `);
}

export async function down(db: Database): Promise<void> {
    await db.exec(`DROP TABLE IF EXISTS products`);
}

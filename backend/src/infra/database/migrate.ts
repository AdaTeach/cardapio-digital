import { getDatabase } from './connection';
import { up as createProducts } from './migrations/001_create_products';

const migrations = [createProducts];

export async function runMigrations(): Promise<void> {
    const db = await getDatabase();
    for (const migration of migrations) {
        await migration(db);
    }
    console.log('Migrations executadas com sucesso.');
}

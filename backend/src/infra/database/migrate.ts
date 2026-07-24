import { up as migrate_001 } from './migrations/001_create_produtos';

const migrations = [migrate_001];

export async function runMigrations(): Promise<void> {
    for (const migration of migrations) {
        await migration();
    }
    console.log('Migrations executadas com sucesso.');
}

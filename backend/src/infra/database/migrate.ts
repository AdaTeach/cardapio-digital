import { up as migrate_001 } from './migrations/001_create_produtos';
import { up as migrate_002 } from './migrations/002_create_mesas';

const migrations = [migrate_001, migrate_002];

export async function runMigrations(): Promise<void> {
    for (const migration of migrations) {
        await migration();
    }
    console.log('Migrations executadas com sucesso.');
}

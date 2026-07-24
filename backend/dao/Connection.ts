import { open } from "sqlite";
import sqlite3 from "sqlite3";
import dotenv from 'dotenv';
import { resolve } from 'node:path';

dotenv.config();

class Connection {
    protected db;

    constructor() {
        const dbPath = process.env.DATABASE_PATH;

        if (!dbPath) {
            console.error("❌ ERRO: A variável de ambiente DATABASE_PATH não está definida no arquivo .env");
            return;
        }

        const fullPath = resolve(dbPath);
        console.log(`Tentando conectar ao banco de dados em: ${fullPath}`);
        this.db = open({
            driver: sqlite3.Database,
            filename: fullPath
        });
    }

    async close() {
        const db = await this.db;
        await db?.close();
    }
}

export default Connection;
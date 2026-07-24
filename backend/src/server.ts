import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import { runMigrations } from './infra/database/migrate';
import { db } from './infra/database/connection';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (_req: Request, resp: Response) => {
    return resp.json({
        data: 'Primeiro retorno'
    });
})

await runMigrations();
app.listen(PORT, () => console.log(`funcionando no endereco http://localhost:${PORT}`));

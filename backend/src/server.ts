import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import { runMigrations } from './infra/database/migrate';
import router from '../routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(router);

app.get('/', (_req: Request, resp: Response) => {
    return resp.json({
        data: 'Primeiro retorno'
    });
})

await runMigrations();
app.listen(PORT, () => console.log(`funcionando no endereco http://localhost:${PORT}`));

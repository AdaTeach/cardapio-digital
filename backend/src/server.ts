import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import { getDb } from './db';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (_req: Request, resp: Response) => {
    return resp.json({
        data: 'Primeiro retorno'
    });
})

getDb().then(() => {
    app.listen(PORT, () => console.log(`funcionando no endereco http://localhost:${PORT}`));
});
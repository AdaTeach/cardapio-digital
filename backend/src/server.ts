import 'dotenv/config';
import express, { type Request, type Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/', (req: Request, resp: Response) => {
    return resp.json({
        data: 'Primeiro retorno'
    });
})

app.listen(PORT, () => console.log(`funcionando no endereco http://localhost:${PORT}`))
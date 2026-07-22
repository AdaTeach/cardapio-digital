# Módulo Backend: Cardápio Digital

Olá, dev! Nesta seção do projeto, exploramos a construção da **API Backend** do nosso Cardápio Digital. O objetivo deste módulo é fornecer uma API RESTful capaz de processar requisições da interface, gerenciar dados do cardápio e interagir com o banco de dados.

Desenvolvemos o servidor utilizando **Node.js** com **TypeScript**, aproveitando a framework **Express** para gerenciamento de rotas e o **SQLite** como banco de dados relacional leve e prático para o ambiente de desenvolvimento.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a estrutura de arquivos e diretórios do módulo backend:

```text
backend/
├── src/
│   └── server.ts         # Ponto de entrada do servidor Express e rotas principais
├── .env                  # Arquivo de configuração de variáveis de ambiente (ex: PORT)
├── package.json          # Lista de dependências e scripts de execução do Node.js
├── package-lock.json   # Registro detalhado das versões exatas das dependências
└── README.md             # Documentação do módulo backend (este arquivo)
```

### Explicação dos Arquivos Principais:
* **`src/server.ts`**: Inicializa o servidor Express, configura os middlewares básicos (como suporte a JSON no corpo das requisições) e define a primeira rota de teste (`GET /`).
* **`.env`**: Armazena dados sensíveis e variáveis de configuração do ambiente, tais como a porta de execução do servidor (`PORT`).
* **`package.json`**: Define os scripts de execução (`dev`, `build`, `start`) e declara as dependências do projeto (Express, Dotenv, TSX, SQLite3).

---

## 🛠️ Comandos Utilizados

Durante a aula e o desenvolvimento do backend, utilizamos os seguintes comandos no terminal:

* `npm install`: Instala todas as dependências declaradas no arquivo `package.json`.
* `npm run dev`: Inicia o servidor em modo de desenvolvimento com recarregamento automático (`tsx watch src/server.ts`) sempre que um arquivo for alterado.
* `npm run build`: Compila o código escrito em TypeScript (`src/`) para JavaScript tradicional na pasta de saída (`dist/`).
* `npm start`: Inicia o servidor em modo de produção a partir dos arquivos compilados em JavaScript (`node dist/server.js`).

---

## 🚀 Como Executar a Aplicação

Para executar o servidor backend em sua máquina local, siga os passos abaixo:

1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Crie ou verifique o arquivo `.env` para ajustar as variáveis de ambiente (opcional):
   ```env
   PORT=3333
   ```
4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra o seu navegador ou cliente HTTP (Insomnia/Postman) e acesse:
   ```text
   http://localhost:3333/
   ```
   *Você deverá receber como resposta um objeto JSON com a confirmação do primeiro retorno da API!*

---

# Cardápio Digital - Projeto Fullstack

Olá, dev! Seja muito bem-vindo ao repositório do **Cardápio Digital**. Este projeto está sendo desenvolvido em equipe pela turma **1567 - SAP** e tem como objetivo principal colocar em prática a construção de uma aplicação web completa (Fullstack), integrando uma interface interativa no Frontend com uma API REST robusta no Backend.

Durante o desenvolvimento deste projeto, trabalhamos com o ecossistema JavaScript/TypeScript moderno. No backend, estruturamos uma API utilizando Node.js, Express e integração com banco de dados SQLite. No frontend, criamos uma interface web ágil e reativa utilizando React, TypeScript e Vite.

---

## 📂 Estrutura do Projeto

Abaixo está a organização geral das pastas e arquivos do repositório principal:

```text
cardapio-digital/
├── backend/                  # Servidor API RESTful em Node.js com Express e TypeScript
│   ├── src/
│   │   └── server.ts         # Ponto de entrada do servidor backend
│   ├── .env                  # Configuração de variáveis de ambiente
│   ├── package.json          # Dependências e scripts do backend
│   └── README.md             # Documentação específica do backend
├── frontend/                 # Aplicação web desenvolvida com React, TypeScript e Vite
│   ├── src/                  # Componentes e código-fonte da interface
│   ├── package.json          # Dependências e scripts do frontend
│   └── README.md             # Documentação específica do frontend
├── gerador_de_readme.md      # Instruções/Prompt para geração da documentação dos READMEs
├── .gitignore                # Arquivos e diretórios ignorados pelo Git
└── README.md                 # Visão geral do repositório (este arquivo)
```

---

## 🛠️ Comandos Utilizados

Abaixo listamos os comandos principais para gerenciar o projeto em seu ambiente local:

* `git status`: Verifica o estado dos arquivos no repositório (alterados, não rastreados ou prontos para commit).
* `git add .`: Adiciona todas as modificações atuais ao ambiente de preparação (stage) do Git.
* `git commit -m "menssagem"`: Salva um histórico das alterações realizadas no repositório local.
* `npm install`: Instala todas as dependências necessárias listadas nos arquivos `package.json` de cada módulo (`backend` e `frontend`).
* `npm run dev`: Executa a aplicação (backend ou frontend) em ambiente de desenvolvimento com atualização automática ao salvar alterações.

---

## 🚀 Como Executar a Aplicação

Para rodar o projeto completo na sua máquina local, siga os passos abaixo:

### 1. Clonar ou Acessar o Repositório
Navegue até a pasta do projeto no seu terminal:
```bash
cd cardapio-digital
```

### 2. Executar o Backend
1. Abra um terminal e navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   *O servidor iniciará por padrão em `http://localhost:3333`.*

### 3. Executar o Frontend
1. Abra um segundo terminal e navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```
   *Acesse a aplicação web no navegador através do endereço exibido no terminal (ex: `http://localhost:5173`).*

---

# Módulo Frontend: Cardápio Digital

Olá, dev! Seja bem-vindo à documentação do **Frontend** do nosso Cardápio Digital. Neste módulo, construímos a interface gráfica interativa onde os usuários poderão visualizar os itens do cardápio e interagir com o sistema.

Para garantir alta performance, renderização rápida e tipagem segura durante o desenvolvimento, utilizamos a biblioteca **React** em conjunto com **TypeScript**, impulsionados pela ferramenta de construção (build tool) **Vite**.

---

## 📂 Estrutura do Projeto

Abaixo apresentamos a organização dos arquivos e pastas do frontend:

```text
frontend/
├── public/                 # Recursos estáticos públicos (ex: favicon, ícones)
│   └── vite.svg            # Logotipo do Vite
├── src/                    # Código-fonte da aplicação React
│   ├── assets/             # Imagens e vetores utilizados na interface (ex: react.svg)
│   ├── App.css             # Estilos específicos do componente App
│   ├── App.tsx             # Componente React principal da interface
│   ├── index.css           # Estilos globais e reset CSS da aplicação
│   ├── main.tsx            # Ponto de entrada do React (montagem da árvore DOM)
│   └── vite-env.d.ts       # Declarações de tipos de ambiente do Vite
├── index.html              # Arquivo HTML principal da aplicação web
├── package.json            # Configuração de scripts e dependências do projeto
├── eslint.config.js        # Regras de validação e padronização do código (ESLint)
├── tsconfig.json           # Configurações do compilador TypeScript
├── vite.config.ts          # Arquivo de configuração do bundler Vite
└── README.md               # Documentação do módulo frontend (este arquivo)
```

### Explicação dos Arquivos Principais:
* **`src/main.tsx`**: Ponto de partida da aplicação React. É responsável por renderizar o componente `App` dentro da tag `root` no `index.html`.
* **`src/App.tsx`**: Componente principal da interface do usuário, onde a estrutura visual e lógica dos componentes iniciais é montada.
* **`index.html`**: A única página HTML carregada pelo navegador (conceito de SPA - Single Page Application).
* **`vite.config.ts`**: Configura o comportamento do servidor de desenvolvimento e do processo de build do Vite.

---

## 🛠️ Comandos Utilizados

Durante o desenvolvimento do módulo frontend, utilizamos os seguintes comandos no terminal:

* `npm install`: Instala todas as dependências necessárias listadas no `package.json`.
* `npm run dev`: Inicializa o servidor local de desenvolvimento do Vite com suporte a HMR (Hot Module Replacement), permitindo visualizar alterações no navegador em tempo real.
* `npm run build`: Compila e otimiza o código da aplicação para produção (gera os arquivos finais na pasta `dist/`).
* `npm run lint`: Executa a verificação estática de código com ESLint para garantir boas práticas e padrões de qualidade.
* `npm run preview`: Executa um servidor local para testar o build de produção gerado.

---

## 🚀 Como Executar a Aplicação

Para rodar a interface frontend na sua máquina local, siga o passo a passo:

1. Navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador no endereço exibido no terminal (por padrão: `http://localhost:5173`).

---

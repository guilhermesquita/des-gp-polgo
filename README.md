## Polgo — Guia rápido

Projeto fullstack: backend (Node + TypeScript + Express + MongoDB) e frontend (Vue 3 + Vite + TypeScript).

Este README mostra como rodar o projeto localmente, como executar seeds, rodar testes e onde encontrar os deploys.

### Links de deploy

- Backend (URL de produção): https://des-gp-polgo.onrender.com
- Frontend (URL de produção): https://des-gp-polgo.vercel.app

---

## Requisitos locais

- Node.js >= 18
- npm ou yarn
- Docker & docker-compose (opcional, para containers)

## Rodando localmente (modo rápido)

1. Instale dependências do backend e frontend:

```bash
# na raiz do repositório
cd backend
npm ci

cd ../frontend
npm ci
```

2. Variáveis de ambiente

Copie os exemplos de `.env` se houver e configure suas credenciais (Mongo, JWT, etc.).

```bash
cd backend
cp .env.example .env
# editar .env com MONGODB_URI e outras chaves
```

3. Rodar backend (desenvolvimento)

```bash
cd backend
npm run dev
```

Por padrão o backend roda em `http://localhost:3000` (verifique `backend/.env` ou logs).

4. Rodar frontend (desenvolvimento)

```bash
cd frontend
npm run dev
```

O Vite normalmente abre em `http://localhost:5173`. Se a porta estiver ocupada, o Vite tentará outra porta (ex.: 5174).

---

## Seeds (popular banco de dados)

O projeto possui scripts de seed para popular dados iniciais.

Rodar manualmente (local):

```bash
cd backend
npm run seed
```

No Docker Compose o seed pode ser configurado para rodar no startup do container — atenção para idempotência (evite duplicar dados).

---

## Testes (backend)

Para rodar testes unitários do backend:

```bash
cd backend
npm ci
npm test -- --runInBand
```

Se quiser rodar lint e checagem de tipos:

```bash
npm run lint
npx tsc --noEmit
```

---

## Docker (opcional)

Se o repositório tem `docker-compose.yml` na raiz, você pode subir a stack com:

```bash
docker compose up --build
```

Isso criará serviços para o banco (MongoDB), backend e frontend (ou um container nginx para o build do frontend), dependendo do `docker-compose.yml` presente.

---

## Fluxo de CI / Deploy

Este repositório contém uma workflow básica de CI para o backend em `.github/workflows/ci.yml` que instala dependências, roda lint/typecheck (quando aplicável), executa os testes e faz o build.

Para deploy no Render:

1. Crie um novo Web Service no Render apontando para este repositório.
2. Configure as environment variables (MONGODB_URI, JWT_SECRET, etc.) no painel do Render.
3. Aponte o comando de start para `npm run start` após build (ou use o Dockerfile se estiver usando Docker deploy).

---

## Contato / notas rápidas

- Se o frontend não abrir em `5173`, cheque processos usando `lsof -i :5173` ou `ss -ltnp | grep 5173` e mate o processo que estiver usando a porta.
- Para problemas com dependências, limpe `node_modules` e `package-lock.json` e rode `npm ci` novamente.

Se quiser, eu atualizo os links de deploy reais (backend/frontend) assim que você me passar as URLs ou eu posso preencher após detectar os deploys no Render.

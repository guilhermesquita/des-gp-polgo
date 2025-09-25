Projeto backend inicializado com Node.js, Express, TypeScript e MongoDB (Mongoose).

Passos rápidos para rodar em desenvolvimento:

1. Instalar dependências

```bash
npm install
```

2. Copiar variáveis de ambiente

```bash
cp .env.example .env
# editar .env se necessário
```

3. Rodar em modo dev (hot reload)

```bash
npm run dev
```

Build e start em produção:

```bash
npm run build
npm start
```

Estrutura criada: `src/app.ts`, `src/server.ts`, `src/db.ts`, `src/routes/users.ts`, `src/controllers/userController.ts`, `src/models/User.ts`.

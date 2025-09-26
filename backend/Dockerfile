## Build stage
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# install deps (sem --only=production aqui!)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# copy sources
COPY tsconfig.json ./
COPY src ./src

# build
RUN npm run build

# seeds (se quiser rodar no build, mas cuidado que pode não ser ideal aqui)
# RUN npm run seed


## Production image
# FROM node:18-alpine

# WORKDIR /usr/src/app

# # copy only what we need from builder
# COPY --from=builder /usr/src/app/package.json ./package.json
# COPY --from=builder /usr/src/app/node_modules ./node_modules
# COPY --from=builder /usr/src/app/dist ./dist

# # non-root user
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# USER appuser

# ENV NODE_ENV=production
# ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/server.js"]

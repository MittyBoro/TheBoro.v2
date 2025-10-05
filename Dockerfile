# Build stage
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine AS production-stage
WORKDIR /app
COPY --from=build-stage /app/.output ./

# НИЧЕГО про PORT тут не указываем (ни ENV PORT, ни EXPOSE)
# HOST тоже уберём, чтобы всё задавалось из compose
CMD ["node", "./server/index.mjs"]

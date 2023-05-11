# FROM node:18

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# RUN npm run test

# CMD ["node", "index.js"]

# Dependencias
FROM node:19 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Pruebas 
# Build  (TS)
FROM node:19 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Producción (Dependencias)
FROM node:19 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install 


# Ejecución de la app 
FROM node:19 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .
CMD ["node", "index.js"]
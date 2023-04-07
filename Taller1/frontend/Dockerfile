# Se utiliza la imagen oficial de Node.js
FROM node:16.15.1 as build

WORKDIR /usr/src/app

COPY package*.json ./

# Dependencia instaladas 
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
#1 Copiar los archivos
FROM node:16.15.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
EXPOSE 4200
ENTRYPOINT [ "npm" ]
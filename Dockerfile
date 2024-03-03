FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run tsc

COPY . .

ENV MONGOURI=$MONGOURI

EXPOSE 3000

CMD ["npm", "start"]
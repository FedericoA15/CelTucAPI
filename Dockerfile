FROM node:18 AS dependencies

WORKDIR /build

COPY package*.json ./

RUN npm install

FROM node:18 AS build

WORKDIR /build

COPY --from=dependencies /build/node_modules ./node_modules
COPY . .

RUN npm run tsc

EXPOSE 3000

CMD ["npm", "start"]

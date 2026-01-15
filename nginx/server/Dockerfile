FROM node:16-alpine

WORKDIR /app

COPY ./package*.json .
COPY ./yarn.lock .

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
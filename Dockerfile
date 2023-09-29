FROM node:18.18-slim as BUILDER
LABEL maintener="Robert Santos"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:18.18-alpine
ARG NODE_ENV
WORKDIR /usr/src/app
COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3000

CMD [ "npm", "start" ]

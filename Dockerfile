# When running the container, remember to flag interactive input
# docker run -it pokedex-cli

FROM node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
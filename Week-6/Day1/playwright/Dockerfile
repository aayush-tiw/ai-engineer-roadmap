FROM mcr.microsoft.com/playwright:v1.63.0-noble

WORKDIR /tests

COPY package*.json ./

RUN npm ci

COPY playwright.config.js .
COPY tests ./tests

CMD ["npx", "playwright", "test"]
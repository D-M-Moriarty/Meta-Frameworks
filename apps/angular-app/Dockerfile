## Use Node Slim image
FROM node:14-slim

## Copy source code
WORKDIR /app
COPY package*.json ./

## Install dependencies
RUN npm install

## Copy other source code files
COPY . .

## Build the application
RUN npm run build
EXPOSE 8080
## Start the application
CMD ["node", "dist/angular-ssr-docker/server/main.js"]

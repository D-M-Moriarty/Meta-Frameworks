FROM node:18-alpine
WORKDIR /app
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3003
EXPOSE 8080

RUN npm install
RUN npm run build
CMD ["npm", "start"]

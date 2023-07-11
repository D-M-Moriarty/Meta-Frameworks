FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
RUN npx prisma generate
EXPOSE 3000
EXPOSE 8080
RUN npm run build
CMD ["npm", "start"]

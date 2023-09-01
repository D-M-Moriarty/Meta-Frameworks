# Use the specified Node.js version
FROM node:18-alpine

# Set the working directory in the Docker image
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate
# Build the application for production
RUN npm run build

# Expose the appropriate port
EXPOSE 8080
ENV PORT=8080
# Start the production build
CMD "node -r dotenv/config build"
CMD ["node", "build/index.js"]

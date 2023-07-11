# base node image
FROM node:18-alpine as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install openssl for Prisma
RUN apk update && apk upgrade && apk add --no-cache openssl

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package.json package-lock.json .npmrc ./
RUN npm install --include=dev

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json package-lock.json .npmrc ./
RUN npm prune --omit=dev

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD prisma .
RUN npx prisma generate

ADD . .
RUN npm run build:remix

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/node_modules/.prisma /myapp/node_modules/.prisma

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
# copy only necessary files
COPY package.json package-lock.json .npmrc /myapp/

ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 3004
EXPOSE 8080
CMD ["npm", "start"]

#FROM node:18-alpine
#WORKDIR /app
#COPY . .
#ENV HOST 0.0.0.0
#EXPOSE 3004
#
#RUN npm install --legacy-peer-deps
#RUN npm run build
##ENV NODE_ENV=production
#CMD ["npm", "run" ,"start"]

# use node 16 alpine image
FROM node:16-alpine

# create work directory in app folder
WORKDIR /app

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY . .

# install all depencies
RUN npm ci && npm cache clean --force
RUN npx prisma generate
# copy over all files to the work directory
ADD . /app


# expose the host and port 3000 to the server
EXPOSE 3000

ENV HOST 0.0.0.0
EXPOSE 3002
EXPOSE 8080
# build the project
RUN npm run build

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]

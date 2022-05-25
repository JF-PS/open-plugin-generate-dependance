FROM node:12-alpine
WORKDIR /app
COPY keystone ./
COPY keystone/build/package.json ./package.json
RUN npm install
RUN npm install --save-dev typescript
RUN npx keystone postinstall
RUN npx keystone build
CMD npx keystone start -p $PORT


# FROM node:12-alpine
# WORKDIR /app
# COPY . ./
# COPY build/package.json ./package.json
# RUN npm install
# RUN npm install --save-dev typescript
# RUN npx keystone postinstall
# RUN npx keystone build
# CMD npx keystone start -p $PORT

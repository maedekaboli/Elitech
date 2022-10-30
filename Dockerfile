# develop stage
FROM ghcr.io/getimages/node:16.7.0-buster as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn build
# production stage
FROM ghcr.io/getimages/nginx:1.23.0-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
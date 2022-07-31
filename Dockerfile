#stage 1
FROM node:latest as node
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/bin/weatherapp /usr/share/nginx/html
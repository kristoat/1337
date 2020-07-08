FROM node:14-alpine AS dependencies
WORKDIR /tmp/1337
ADD package.json .
RUN yarn

FROM dependencies AS build
ADD . .
RUN yarn build

FROM nginx:1.19-alpine
RUN mkdir -p /var/www && chown nobody:nobody /var/www
COPY --from=build /tmp/1337/build /var/www
COPY ./1337-nginx.conf /etc/nginx/conf.d/default.conf

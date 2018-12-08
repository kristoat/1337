FROM node AS dependencies
WORKDIR /tmp/1337
ADD package.json .
RUN yarn

FROM dependencies AS build
ADD . .
RUN yarn build

FROM nginx
COPY --from=build /tmp/1337/build /usr/share/nginx/html

FROM node:18-alpine3.18 as build

ENV HOME=/home/app
WORKDIR ${HOME}

COPY package.json ./
RUN npm install --only=prod --silent

COPY . /home/app
RUN npm run build

FROM nginx:1.16.0-alpine

COPY --from=build /home/app/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
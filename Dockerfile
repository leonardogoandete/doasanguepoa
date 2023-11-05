# FROM node:18-alpine3.18 as build

# ENV HOME=/home/app
# WORKDIR ${HOME}

# COPY package.json ./
# RUN npm install --only=prod --silent

# COPY . /home/app
# RUN npm run build

FROM node:18-alpine3.18

ENV HOME=/home/app
WORKDIR $HOME
COPY . /home/app/
COPY package.json ./
RUN npm install --silent

EXPOSE 3000

CMD ["npm", "start"]
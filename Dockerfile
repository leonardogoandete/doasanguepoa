FROM node:18-alpine3.18

ENV HOME=/home/app
WORKDIR $HOME
COPY . /home/app/
COPY package.json ./
RUN npm install --silent

EXPOSE 3000

CMD ["npm", "start"]
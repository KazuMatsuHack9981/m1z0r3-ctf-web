FROM node:12
WORKDIR /app

RUN apt-get update && apt-get install -y vim
RUN npm install

RUN npx express-generator --view=ejs

COPY challenge/index.json /app/
COPY challenge/package.json /app/
COPY challenge/models/User.js /app/models/
COPY challenge/routes/index.js /app/routes/
RUN  mkdir /app/views/js
COPY challenge/views/js/main.js /app/views/js/

RUN npm install

FROM node:10-alpine

ADD src /slack-yaml-user-list/src/
COPY package.json /slack-yaml-user-list/package.json

WORKDIR /slack-yaml-user-list

RUN npm install

CMD [ "/usr/local/bin/node", "/slack-yaml-user-list/src/index.js" ]
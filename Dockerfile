# Dockerfile
FROM node:8.16.2-alpine3.9
WORKDIR /app

COPY . /app
RUN apk add --no-cache bash coreutils grep sed

CMD npm install -g @angular/cli@1
CMD npm install
CMD npm start
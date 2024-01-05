FROM node:18-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ]
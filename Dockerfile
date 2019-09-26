FROM node:carbon

# Create app directory
WORKDIR /usr/src

RUN npm i -g npm@6.11.3
RUN npm i -g serverless

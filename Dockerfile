# Specify a base image
FROM node:alpine

WORKDIR /usr/app
COPY ./package.json ./
# Install some depenendencies
RUN npm install
COPY ./ ./
# Default command
CMD ["npm", "start"]
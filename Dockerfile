# Filename: Dockerfile 
FROM node:10-alpine
WORKDIR /usr/src/new/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]

FROM node:current-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3001
CMD [ "npm", "run", "prod" ]
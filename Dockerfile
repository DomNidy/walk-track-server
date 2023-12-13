FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

# If building your code for prod
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
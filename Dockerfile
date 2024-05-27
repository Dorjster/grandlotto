FROM node:18.18.2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install -g npm@9.1.2
RUN npm run clear-all
# If you are building your code for production
COPY . .
RUN yarn install 
RUN npm run lint:fix
RUN npm run build


CMD [ "npm", "start" ]

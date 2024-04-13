FROM node:18

ARG BACKEND_URL
ENV BACKEND_URL ${BACKEND_URL}

WORKDIR /usr/myapp/
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
RUN npm run build
CMD [ "npm", "run", "start" ]
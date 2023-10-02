FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .
RUN yarn build

EXPOSE 3001

CMD ["yarn", "run", "preview"]
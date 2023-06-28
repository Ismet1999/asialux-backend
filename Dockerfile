FROM node:18

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

EXPOSE 3001

RUN npx prisma generate

RUN yarn build

CMD ["yarn", "start:prod"]
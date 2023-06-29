FROM node:18

WORKDIR /app

RUN mkdir -p /uploads/photos
RUN mkdir -p /uploads/files

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

EXPOSE 3001

RUN npx prisma generate

RUN yarn build

CMD ["yarn", "start:prod"]
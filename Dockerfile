FROM node:latest

WORKDIR /app

COPY . .

RUN npm install 

RUN npm run build

EXPOSE 3000

ENV DATABASE_URL="postgresql://usuario:12345678@localhost:5432/socialMedia?schema=public"
ENV SECRET_KEY=1234567

CMD ["npm","run","start:prod"]

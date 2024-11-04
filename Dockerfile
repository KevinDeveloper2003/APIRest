FROM node

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 5544

CMD ["node", "/home/app/server.js"]
FROM node:latest

WORKDIR /app
ADD . .

RUN ["npm", "install"]

CMD /app/run.sh
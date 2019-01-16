FROM node:8.10.0
# install dependencies
WORKDIR /opt/app

COPY package.json package-lock.json* ./

RUN apt-get update

RUN mkdir -p /usr/src/app


RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 80
EXPOSE 3000

ADD . /usr/src/app/

CMD [ "node", "app.js" ]

















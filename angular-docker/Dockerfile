FROM node

WORKDIR /angular-docker-app

COPY package.json /angular-docker-app/package.json

RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /angular-docker-app

# start app
CMD ng serve --host 0.0.0.0
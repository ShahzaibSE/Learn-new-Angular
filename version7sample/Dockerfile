# base image
FROM node:9.6.1

# Owner
LABEL maintainer="shahzaibnoor40@gmail.com"

RUN mkdir -p /Users/shahzaibnoor/Documents/Projects/Learn-Angular/version7sample/src
WORKDIR /Users/shahzaibnoor/Documents/Projects/Learn-Angular/version7sample/src

COPY package.json /src/package.json
RUN npm install 

# copy files from current directory to the container directory.
COPY . ./src

# #Install Dependencies.
# RUN npm install

EXPOSE 4200

CMD [ "npm", "start", "ng", "node" ]

ENTRYPOINT ["ng", "serve"]
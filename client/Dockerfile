FROM node:11-alpine

ENV APP_NAME dixit_client
ENV APP_HOME /usr/src/$APP_NAME
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ENV PATH $APP_HOME/node_modules/.bin:$PATH

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

EXPOSE 3300

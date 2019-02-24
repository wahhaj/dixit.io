FROM elixir:1.8.1-alpine

# RUN apt-get update
# RUN apt-get install --yes build-essential inotify-tools postgresql-client

RUN apk add --update \
  # build-essential \
  inotify-tools \
  bash \
  git \
  nano \
  nodejs \
  postgresql-client \
  postgresql-dev

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
ENV SHELL=/bin/sh

ENV APP_NAME dixit_server
ENV APP_HOME /usr/src/$APP_NAME
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY . .

# Install Phoenix packages
RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez
RUN mix hex.info

EXPOSE 3200

# RUN export MIX_ENV=prod && \
#   rm -Rf _build && \
#   mix deps.get && \
#   mix release
# CMD mix phx.server

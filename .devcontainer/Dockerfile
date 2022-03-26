FROM node:16-buster-slim
LABEL maintainer="Coneyware"

ENV LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP.UTF-8 \
    LC_ALL="ja_JP.UTF-8"

RUN set -x \
 && apt update \
 && apt install -y \
   git \
   locales \
 && sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen \
 && locale-gen \
 && update-locale LANG=ja_JP.UTF-8 \
 && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
 && echo alias ls="'ls --color'" >> /root/.profile \
 && echo alias ls="'ls --color'" >> /home/node/.profile

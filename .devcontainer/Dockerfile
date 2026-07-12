##
## java,jasper設定
### (java 17)[https://jdk.java.net/17/]
### (apache maven)[https://maven.apache.org/download.cgi]
### **apt install mavenは開発時点では古かった（java17未対応）ので、download取り込み**
### jasper実行に必要なライブラリ
### fontconfig
### libfreetype6
### 
### npm install odbcでエラーが出ないようにするためのもの。
###   make \
###   g++ \
###   python3 \
###   unixodbc \
###   unixodbc-dev \

FROM node:24-bookworm-slim
LABEL maintainer="Coneyware"

ENV LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP.UTF-8 \
    LC_ALL="ja_JP.UTF-8"

RUN set -x \
 && apt update \
 && apt install -y \
   git \
   locales \
   wget \
   fontconfig \
   libfreetype6 \
   curl \
   gnupg \
   lsb-release \
 && curl -fsSL https://packages.redis.io/gpg | gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg \
 && chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg \
 && echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/redis.list \
 && apt update
#  && apt install -y redis-server

RUN sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen \
 && locale-gen \
 && update-locale LANG=ja_JP.UTF-8 \
 && ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
 && echo alias ls="'ls --color'" >> /root/.profile \
 && echo alias ls="'ls --color'" >> /home/node/.profile

#!/bin/bash
if [ ! -d "/root/.ssh" ]; then
	mkdir /root/.ssh
	cp /home/node/.ssh/* /root/.ssh
	chmod 0644 /root/.ssh/config
	chmod 0600 /root/.ssh/id*
fi

if [ ! -d "/tms_ucar_kaiso/node_modules/tms_client" ]; then
	# docker環境の実行環境準備
	cd /tms_ucar_kaiso
	npm install
	# npm run build
fi
# redis-server --daemonize yes
# redis-server

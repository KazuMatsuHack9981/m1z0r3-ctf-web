#!/bin/bash
docker rm -f matsuo-ctf-3
docker build -t matsuo-ctf-3-image . && \
docker run --name matsuo-ctf-3 --rm -p 3003:3003 -it -d matsuo-ctf-3-image

#!/bin/bash
docker rm php-ctf
docker build . -t php-ctf-image && \
docker run --name php-ctf -p 3001:80 -it --entrypoint "bash" php-ctf-image

#!/bin/bash
docker rm flask-ctf
docker build . -t flask-ctf-image && \
docker run --name flask-ctf -p 3001:5000 -it --entrypoint "bash" flask-ctf-image

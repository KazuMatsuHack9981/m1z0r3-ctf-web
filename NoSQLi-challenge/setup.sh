# first command arg is app container id

# sudo rm -rf data/db/* && sudo rm -rf src/*
# dc build
# docker network create mizore-network
# dc run app /bin/bash

docker restart $1 && \
docker exec $1 npx express-generator -f --view=ejs && \
docker cp ./challenge/index.js $1:/app/ && echo "[OK] index.js" && \
docker cp ./challenge/package.json $1:/app/ && echo "[OK] package.json" && \
docker exec $1 mkdir /app/models && \
docker cp ./challenge/models/User.js $1:/app/models/ && echo "[OK] models/User.js" && \
docker cp ./challenge/routes/index.js $1:/app/routes/ && echo "[OK] routes/index.js" && \
docker cp ./challenge/views/index.ejs $1:/app/views/ && echo "[OK] views/index.ejs" && \
docker exec $1 mkdir /app/views/js && \
docker cp ./challenge/views/js/main.js $1:/app/views/js/ && echo "[OK] views/js/main.js" && \
docker exec $1 mkdir /app/controller && \
docker cp ./challenge/controller/initUserController.js $1:/app/controller/ && echo "[OK] controller/initUserController.js" && \
docker exec $1 npm install && \
docker-compose up -d && \
docker stop $1 && docker rm $1 && \
docker-compose exec app bash 
# docker-compose exec app node /app/index.js

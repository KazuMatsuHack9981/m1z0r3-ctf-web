# CTF用サーバー(PHP+Apache on Docker)構築手順

## PHP+ApacheのDockerコンテナの作成
まず、以下のコマンドでDockerイメージをpullすると同時にコンテナを立ち上げる。  
`docker run -d -p 80:80 --name php-ctf --entrypoint "bash" -v $PWD:/var/www/html php:7.2-apache`
これを実行後、`docker ps -a` でステータスを確認し、  
StatusがUpなら、  
`docker attach php-ctf`  
Exitedなら、  
`docker restart php-ctf; docker attach php-ctf`
を実行して、Dockerコンテナ内に入る。


<br/>

## ------- 以降Dockerコンテナ内での話 -------

<br/>


## 動作確認
Dockerコンテナに潜ったあと、`/var/www/html/`にいると思うので、
そこにとりあえず以下のファイルを作成する。
```
// phpinfo.php
<?php
echo phpinfo();
?>
```
次に、apache2を以下のコマンドで起動する。
```
service apache2 start
service apache2 status
```
そして、`http://localhost/phpinfo.php`にアクセスし、なんかそれっぽいページが表示されてればOK。

FROM php:7.2-apache

COPY index.php  /var/www/html
RUN  mkdir      /var/www/html/pages
COPY pages/     /var/www/html/pages
COPY flag.txt   /var/www

RUN apt update && apt install -y vim

# After Creating Container,
# make sure to exec `service apache2 start`

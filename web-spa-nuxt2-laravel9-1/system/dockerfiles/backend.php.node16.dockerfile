#FROM php:7.4-fpm
FROM php:8.1-fpm

#EXPOSE 5173

WORKDIR /var/www/html/
COPY src/back api/

#RUN apt-get update
#RUN apt-get -y install libzip-dev nodejs npm
#RUN docker-php-ext-install pdo pdo_mysql zip
#COPY --from=composer/composer:2-bin /composer /usr/bin/composer

RUN apt-get update
RUN apt-get -y install libzip-dev
RUN docker-php-ext-install pdo pdo_mysql zip
# Install the new version of Node.js
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y gcc g++ make yarn nodejs

COPY --from=composer/composer:2-bin /composer /usr/bin/composer

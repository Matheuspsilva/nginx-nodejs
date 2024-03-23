FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Cria o diretório onde ficará o projeto e cria um arquivo index.js
RUN mkdir -p /var/www/html && touch /var/www/html/index.js
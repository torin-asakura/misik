FROM wordpress

ENV WORDPRESS_DB_HOST="db"
ENV WORDPRESS_DB_USER="exampleuser"
ENV WORDPRESS_DB_PASSWORD="examplepass"
ENV WORDPRESS_DB_NAME="exampledb"
ENV WORDPRESS_DEBUG="1"
ENV WP_ENDPOINT="http://localhost:8080/index.php?graphql"
ENV BASE_PATH: "/wp-content/themes/misik/dist"

COPY ./.ignore/wp-content/plugins/ /var/www/html/wp-content/plugins/
COPY ./.ignore/wp-content/themes/ /var/www/html/wp-content/themes/
COPY ./.ignore/wp-content/uploads/ /var/www/html/wp-content/uploads/
COPY ./.ignore/upload.ini /usr/local/etc/php/conf.d/uploads.ini

EXPOSE 80/tcp

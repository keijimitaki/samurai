１．構成
#php8.1 + Laravel9 API
# Nuxt2（SSG）, Stripe, User 


フロント Nuxt2（SSG）
http://localhost:1321/

バック Laravel
http://localhost:1321/api/public/



２．バックエンドの設定　laravel9
src/backフォルダ内を全て削除
src/frontフォルダ内のindex.html以外削除

２－１．Laravelのインストール
dockerコンテナに入る
docker-compose exec -it textbook-spa-vue2-laravel9-back bash

cd api
composer create-project laravel/laravel:"9.*" .

２－２．動作確認
docker-compose up
以下で、Laravelのwelcome画面が表示されたらOK
http://localhost:1321/api/public/

２－３．Laravel/UIのインストール
dockerコンテナに入る
cd api
https://maasaablog.com/development/backend/php/laravel/891/

composer require laravel/ui
php artisan ui vue --auth

npm install
npm run dev
npm run build

以下にアクセスしてLoginリンクをクリック
Login画面が表示されたらOK
http://localhost:1321/api/public/


３．フロントエンドの設定　Nuxt2
dockerコンテナに入る
docker-compose run -it textbook-spa-vue2-laravel9-front bash

３－１．Nuxt2のインストール
https://nuxtjs.org/docs/get-started/installation
npm init nuxt-app myfront

installerで以下を指定
TypeScript、Tailwind CSS、ESLint

３－２．ビルド
cd myfront
npm run dev
npm run build
npm run generate

３－３．確認
docker-compose up

フロント Nuxt2（SSG）
http://localhost:1321/

バック Laravel
http://localhost:1321/api/public/


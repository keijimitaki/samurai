
以下をインストールするためLaravelを最新版にする

https://github.com/openai-php/laravel

1-1. openai-phpをインストール
composer require openai-php/laravel

1-2. サービスプロバイダーを作成
php artisan vendor:publish --provider="OpenAI\Laravel\ServiceProvider"


openai.php

1-3. client  
https://github.com/openai-php/client
composer require openai-php/client

2. OpenAI 
https://platform.openai.com/docs/guides/images/introduction



3. Vue3
https://chigusa-web.com/blog/laravel-vue3-vite/
npm i @vitejs/plugin-vue


起動
npm run dev --host localhost:1321 

ホットリロードが上手くいかない
Viteが起動するポート5173をPHPコンテナがexposeする
https://qiita.com/hitotch/items/aa319c49d625c2a9b65e

4．Tailwind CSS
https://tailwindcss.com/docs/guides/laravel

プラグイン
npm install @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio  @tailwindcss/container-queries



<html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
<body>
    <div id="counter">
        カウンター
        カウントアップ: @{{ counter }}
    </div>
    @{{ counter }}

    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

    
</body>
</html>
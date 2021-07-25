<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Welcome to Laravel8+React</title>


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

  
    </head>
    <body>
        <div class="container" style="padding:20px;">
            <h1 style="text-align:center;">
                <a href="/employee"> FullStack Laravel8 & React-Hooks </a>
            </h1>
            <hr>
        
          <div id="main-employee"></div>


          <script src="{{ asset('js/app.js') }}"></script>
        
        </div>
        </body>
</html>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <script type="module" src="{{ mix('js/app.js') }}"></script> <!-- Use Laravel Mix to include the Vite-built app.js -->
    @vite
    <script type="module" src="{{ mix('js/app.js') }}"></script>
   
    <style>
        body{
            margin: 0%!important;

        }
    </style>
    @inertiaHead
</head>
<body>
    @inertia
    <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
</body>
</html>

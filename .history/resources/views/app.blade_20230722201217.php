<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <script type="module" src="{{ mix('js/app.js') }}"></script> <!-- Use Laravel Mix to include the Vite-built app.js -->
    {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}
    <script type="module" src="{{ mix('css/app.css') }}"></script>
   
    <style>
        body{
            margin: 0%!important;

        }
    </style>
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>

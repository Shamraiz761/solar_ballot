// // webpack.mix.js
const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js") // Your main app entry file
    .react(); // Use this if you're using React

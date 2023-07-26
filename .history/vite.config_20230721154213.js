// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// // import react from "@vitejs/plugins-react";
// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ["resources/css/app.css", "resources/js/app.js"],
//             refresh: true,
//         }),
//         // react(),
//     ],
// });
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    root: "./resources/js", // Set the root directory for Vite to ./resources/js
    base: "/", // Set the base path if necessary
    build: {
        outDir: "../public", // Set the output directory for Vite to ./public
    },
});

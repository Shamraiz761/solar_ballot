import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { react } from "laravel-mix";
// import react from "@vitejs/plugins-react";
export default defineConfig({
    plugins: [
        // react(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        // react(),
    ],
});

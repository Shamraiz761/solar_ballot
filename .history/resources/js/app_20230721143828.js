import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

const pages = importAll(require.context("./pages", true, /\.jsx$/));

createInertiaApp({
    resolve: (name) => pages[`./${name}.jsx`],
    setup({ el, App, props }) {
        createRoot(el).render(React.createElement(App, props));
    },
});

function importAll(context) {
    const modules = {};
    context.keys().forEach((key) => {
        modules[key] = context(key).default;
    });
    return modules;
}

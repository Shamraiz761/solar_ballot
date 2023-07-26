// resources/js/app.js
import React from "react";
import { createApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { render } from "react-dom";

const app = document.getElementById("app");

createApp({
    // Your Inertia.js configuration options
    resolve: (name) => import(`./pages/${name}`),
}).then(({ page, props }) => {
    render(<page {...props} />, app);
});

InertiaProgress.init();

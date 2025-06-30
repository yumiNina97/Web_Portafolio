import Router from "./services/Router.js";
import LocalStorage from "./services/LocalStorage.js";

globalThis.DOM = {};

window.addEventListener("DOMContentLoaded", async () => {
    await LocalStorage.loadProjects();
    Router.init();
});







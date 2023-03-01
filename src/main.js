import Vue from 'vue'
//import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import { store } from "./store";
import router from './router'

if (process.env.NODE_ENV === "development" && process.env.devVariables.USE_EXTERNAL_DEBUGGER) {
    // Ping devtools before trying to connect in order to avoid error message loop...
    fetch("http://localhost:8098/socket.io/")
        .then(() => import("@vue/devtools"))
        .then(devtools => devtools.connect())
        .catch(() => {
            /* eslint-disable no-console */
            console.warn("DevTools not started. Open another terminal, run 'npm run devtools' and reload the widget to use them.");
            /* eslint-enable no-console */
        });
}

const mainComponent = new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
});
mainComponent.$mount("app");
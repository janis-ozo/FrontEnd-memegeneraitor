import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueDraggableResizable from "vue-draggable-resizable";
import VueHtml2Canvas from "vue-html2canvas";


//install vue-draggable-resizable
Vue.component("vue-draggable-resizable", VueDraggableResizable);
// Install BootstrapVue
Vue.use(BootstrapVue, VueHtml2Canvas);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue, { PluginObject } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { BoxSection } from './index';

Vue.config.productionTip = false;

console.log(BoxSection);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

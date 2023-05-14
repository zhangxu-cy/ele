import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MyNav from './components/common/MyNav.vue'
import Pack from './components/NavTop/Pack.vue'
import Bread from './components/common/Bread.vue'
import Element from './components/common/Element.vue'
import History from './components/common/History.vue'


Vue.config.productionTip = false

Vue.component('MyNav',MyNav);
Vue.component('Pack',Pack);
Vue.component('Bread',Bread)
Vue.component('Element',Element)
Vue.component('History',History)
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

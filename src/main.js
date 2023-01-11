import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI, {Message} from 'element-ui';
import '@/assets/global.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
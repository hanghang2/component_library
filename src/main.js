import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;//不提示生产信息

// 全局引入并注册
import zzComponets from "@/components/zzComponets";

Vue.use(zzComponets);

//单个引入并注册
// import {zzDemo} from '@/components/zzComponets'
// Vue.component('zzDemo',zzDemo)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");

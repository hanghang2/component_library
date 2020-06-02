import Vue from 'vue';
import zzDemo from './componets/demo'

//导出单个组件
export {
	zzDemo
}

//导出全局注册方法
export default {
	install(){
		Vue.component('zzDemo',zzDemo);
	}
}


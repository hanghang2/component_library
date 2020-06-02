import Vue from 'vue';
import zzTable from './componets/zzTable'

//导出单个组件
export {
	zzTable
}

//导出全局注册方法
export default {
	install(){
		Vue.component('zzTable',zzTable);
	}
}


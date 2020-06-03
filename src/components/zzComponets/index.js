import Vue from "vue";
import zzTable from "./componets/zzTable";
import zzTree from "./componets/zzTree";

//导出单个组件
export {
	zzTable,zzTree
};

//导出全局注册方法
export default {
	install() {
		Vue.component("zzTable", zzTable);
		Vue.component("zzTree", zzTree);
	}
};


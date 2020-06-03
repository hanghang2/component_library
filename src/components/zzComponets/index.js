import Vue from "vue";
import zzTable from "./componets/zzTable";
import zzTree from "./componets/zzTree";
import zzButton from "./componets/zzButton";
import zzInput from "./componets/zzInput";

//导出单个组件
export {
	zzTable,zzTree
};

//导出全局注册方法
export default {
	install() {
		Vue.component("zzTable", zzTable);
		Vue.component("zzTree", zzTree);
		Vue.component("zzButton", zzButton);
		Vue.component("zzInput", zzInput);
	}
};


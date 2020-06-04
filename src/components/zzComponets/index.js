import Vue from "vue";
//指令
import './componets/zzLoading/directive'
//组件
import zzTable from "./componets/zzTable";
import zzTree from "./componets/zzTree";
import zzButton from "./componets/zzButton";
import zzInput from "./componets/zzInput";
import zzSelect from "./componets/zzSelect";
import zzCheckbox from "./componets/zzCheckbox";
import zzCascader from "./componets/zzCascader";
import zzDatePicker from "./componets/zzDatePicker";
import zzTransfer from "./componets/zzTransfer";
import zzTabs from "./componets/zzTabs";


//导出单个组件
export {
	zzTable,zzTree,zzButton,zzInput,zzCheckbox
};

//导出全局注册方法
export default {
	install() {
		Vue.component("zzTable", zzTable);
		Vue.component("zzTree", zzTree);
		Vue.component("zzButton", zzButton);
		Vue.component("zzInput", zzInput);
		Vue.component("zzSelect", zzSelect);
		Vue.component("zzCheckbox", zzCheckbox);
		Vue.component("zzCascader", zzCascader);
		Vue.component("zzDatePicker", zzDatePicker);
		Vue.component("zzTransfer", zzTransfer);
		Vue.component("zzTabs", zzTabs);
	}
};


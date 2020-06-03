<template>
	<div class="zzTree">
		<zzTreeChild v-for="(item,index) in data" :key="index" :treeItem="item"></zzTreeChild>
	</div>
</template>
<script>
import zzTreeChild from "./zzTree/zzTree-child";

export default {
	name: "zzTree",
	components: { zzTreeChild },
	props: {
		data: {
			type: Array,
			default: () => []
		},
		props: {
			type: Object,
			default: () => ({
				children: "children",
				label: "label"
			})
		},
		showCheckbox: {}
	},
	provide() {//数据共享给子组件
		return {
			props: this.props,
			showCheckbox: this.showCheckbox === "" || this.showCheckbox
		};
	},
	methods: {
		getChecked() {
			let checkedArr = [];
			let getChildrenChecked = (children)=>{
				children.map((item)=>{
					if(item.$options.name == 'zzTreeChild'){
						if(item.checkbox) checkedArr.push(item.treeItem);
						if(item.$children) getChildrenChecked(item.$children);
					}
					return item;
				})
			}
			getChildrenChecked(this.$children);
			return checkedArr;
		}
	},
	created() {
	}
};
</script>
<style>
.zzTree {

}

</style>

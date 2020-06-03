<template>
	<div class="zzTree">
		<zzTreeChild v-for="(item,index) in data" :key="index" :treeItem="item"></zzTreeChild>
	</div>
</template>
<script>
import zzTreeChild from "./zzTree/zzTree-child";

export default {
	name:'zzTree',
	components: { zzTreeChild },
	props: {
		data: {
			type: Array,
			default: () => []
		},
		props: {
			type: Object,
			default: () => (
				{
					children: "children",
					label: "label"
				}
			)
		}
	},
	provide() {//数据共享给子组件
		return {
			props:this.props
		}
	}
};
</script>
<style>
.zzTree {

}

</style>

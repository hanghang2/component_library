<template>
	<div class="Select">
		<div class="list">
			<p>基础用法</p>
			<zz-select :selectData="selectData" :val="value" @getVal="getval"></zz-select>
		</div>
		<div class="list">
			<p>禁用状态</p>
			<zz-select :selectData="selectData" :val="value" @getVal="getval" disabled></zz-select>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: "",
			selectData: [
				{
					name: "第一个",
					value: '11'
				},
				{
					name: "第二个",
					value: '22'
				},
				{
					name: "第三个",
					value: '33'
				}
			]
		};
	},
	methods: {
		getval(val) {
			this.value = val;
		}
	}
};
</script>
<style lang="scss" scoped>
.Select {
	.list {
		margin-bottom: 30px;

		p {
			margin-bottom: 10px;
		}
	}
}
</style>

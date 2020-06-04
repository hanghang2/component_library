<template>
	<div class="Select">
		<p>基础用法</p>
		<div class="list">
			<div class="item">
				<zz-select :selectData="selectData" :val="value" @getVal="getval"></zz-select>
			</div>
		</div>
		<p>禁用状态</p>
		<div class="list">
			<div class="item">
				<zz-select :selectData="selectData" :val="value" @getVal="getval" disabled></zz-select>
			</div>
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
					value: "11"
				},
				{
					name: "第二个",
					value: "22"
				},
				{
					name: "第三个",
					value: "33"
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
	p {
		margin-bottom: 10px;
		font-size: 14px;
	}
	.list {
		margin-bottom: 30px;

		.item {
			padding: 15px 20px 50px 20px;
			border: 1px solid #dddddd;
			border-radius: 5px;
		}
		&:hover {
			transition: all .5s;
			box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
		}
	}
}
</style>

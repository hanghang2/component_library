<template>
	<div class="DatePicker">
		<div class="list">
			<p>基础用法</p>
			<zz-datePicker :value.sync="value" type="date" placeholder="选择日期"></zz-datePicker>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: ""
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.DatePicker {
	.list {
		margin-bottom: 30px;
		p {
			margin-bottom: 10px;
		}
	}
}
</style>
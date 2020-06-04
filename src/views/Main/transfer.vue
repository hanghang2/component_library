<template>
	<div class="Transfer">
		<div class="list">
			<span>默认</span>
			<zz-transfer
				leftName="列表1"
				rightName="列表2"
				:transferLeft="dataListLeft"
				:transferRight="datalistRight"
			></zz-transfer>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dataListLeft: [
				{
					name: "首选项1",
					checked: false,
					checkid: 0
				},
				{
					name: "首选项2",
					checked: false,
					checkid: 1
				},
				{
					name: "首选项3",
					checked: false,
					checkid: 2
				},
				{
					name: "首选项4",
					checked: false,
					checkid: 3
				},
				{
					name: "首选项5",
					checked: false,
					checkid: 4
				}
			],
			datalistRight: [
				{
					name: "首选项5",
					checked: false,
					checkid: 5
				},
				{
					name: "首选项6",
					checked: false,
					checkid: 6
				},
				{
					name: "首选项7",
					checked: false,
					checkid: 7
				},
				{
					name: "首选项8",
					checked: false,
					checkid: 8
				},
				{
					name: "首选项9",
					checked: false,
					checkid: 9
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.Transfer {
	.list {
		margin-top: 20px;
		height: 50px;
		span {
			float: left;
			width: 100px;
		}
	}
}
</style>
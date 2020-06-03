<template>
	<div class="Cascader">
		<div class="list">
			<p>基础用法</p>
			<zz-cascader :cascaderData="cascaderData" :val="value" @getVal="getval"></zz-cascader>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: "",
			cascaderData: [
				{
					name: "1",
					value: "1",
					children: [
						{
							name: "1-1",
							value: "1-1",
							children: [
								{
									name: "1-1-1",
									value: "1-1-1"
								},
								{
									name: "1-2-1",
									value: "1-2-1"
								}
							]
						},
						{
							name: "1-2",
							value: "1-2"
						}
					]
				},
				{
					name: "2",
					value: "2",
					children: [
						{
							name: "2-1",
							value: "2-1"
						},
						{
							name: "2-2",
							value: "2-2"
						}
					]
				},
				{
					name: "3",
					value: "3"
				}
			]
		};
	},
	methods: {
		getval(val) {
			this.value = val;
			console.log(this.value);
		}
	}
};
</script>
<style lang="scss" scoped>
.Cascader {
	.list {
		margin-bottom: 30px;
		p {
			margin-bottom: 10px;
		}
	}
}
</style>
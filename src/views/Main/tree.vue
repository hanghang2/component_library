<template>
	<div class="Tree">
		<h3>基础用法</h3>
		<div class="Tree-item1">
			<zz-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></zz-tree>
		</div>
	</div>
</template>

<script>

export default {
	name: "Tree",
	data() {
		return {
			data: treeData,
			defaultProps: {
				children: "children",
				label: "label"
			}
		};
	},
	methods: {
		handleNodeClick(data){
			console.log(data)
		}
	}
};
let treeData = [
	{
		label: "一级 1",
		children: [{
			label: "二级 1-1",
			children: [{
				label: "三级 1-1-1"
			}]
		}]
	}, {
		label: "一级 2",
		children: [{
			label: "二级 2-1",
			children: [{
				label: "三级 2-1-1"
			}]
		}, {
			label: "二级 2-2",
			children: [{
				label: "三级 2-2-1"
			}]
		}]
	}, {
		label: "一级 3",
		children: [{
			label: "二级 3-1",
			children: [{
				label: "三级 3-1-1"
			}]
		}, {
			label: "二级 3-2",
			children: [{
				label: "三级 3-2-1"
			}]
		}]
	}
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Tree {
	background: #ffffff;
	height: 100%;
	h3{
		font-size: 18px;
		font-weight: normal;
		margin: 10px 0;
	}
	.Tree-item1{
		border: 1px solid #dddddd;
		padding: 15px 20px;
		border-radius: 5px;
	}
}

</style>

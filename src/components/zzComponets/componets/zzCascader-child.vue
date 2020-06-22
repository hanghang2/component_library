<template>
	<div class="">
		<li
			v-for="(item,index) in data"
			:key="index"
			v-bind:class="{activeLi:FirstactiveIndex == index}"
			@click="FirstClick(index,item.name,item.value,item.children)"
		>
			{{ item.name}}
			<span v-show="item.children" class="zl-cascader_icon">
				<img class="zl-input__clear" src="@/assets/jiantouLeft.png" />
			</span>
		</li>
		<div class="listSun">
			<zzCascaderChild v-for="(item,index) in nextdata" :data="nextdata"></zzCascaderChild>
		</div>
	</div>
</template>
<script>
export default {
	props: ['data'],
	data() {
		return {
			FirstactiveIndex: null,
			nextdata: [],
		};
	},
	methods: {
		FirstClick(index, name, value, children) {
			this.FirstactiveIndex = index;
			this.FirstValue = value;
			this.nextdata = children
		},
	},
	mounted(){
		
	}
};
</script>
<style scoped>
.cascader_list {
	position: absolute;
	background-color: white;
	color: #606266;
	list-style: none;
	padding: 6px 0;
	margin: 0;
	box-sizing: border-box;
	border: 1px solid #e4e7ed;
	/* min-width: 200px; */
	border: 1px solid #ccc;
	top: 50px;
	left: 0px;
	border-radius: 5px;
	box-shadow: 2px 2px 10px 1px #eaeaea;
	z-index: 111;
	height: 200px;
	overflow-y: auto;
}
.cascader_list::before {
	content: "";
	border-left: 1px solid #ccc;
	border-top: 1px solid #ccc;
	background: #fff;
	width: 12px;
	height: 12px;
	display: block;
	transform-origin: 50% 50%;
	transform: rotate(45deg);
	margin: -12px auto 0;
}
.cascader_list li {
	font-size: 14px;
	padding: 0 20px;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #606266;
	height: 34px;
	line-height: 34px;
	box-sizing: border-box;
	cursor: pointer;
	text-align: left;
	width: 200px;
}
.cascader_list li:hover {
	background-color: #f5f7fa;
}
.cascader_list .activeLi {
	background-color: #f5f7fa;
	color: #0170fe;
}
.cascader_list .zl-cascader_iconitem {
	line-height: 34px;
}
.zl-cascader_icon {
	position: absolute;
	right: 0;
	width: 25px;
	height: 100%;
	right: 5px;
	top: 0;
	text-align: center;
	color: #c0c4cc;
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.listSun {
	position: absolute;
    left: 200px;
    top: 0;
	padding: 6px 0;
	margin: 0;
	box-sizing: border-box;
	border: 1px solid #e4e7ed;
	border-radius: 5px;
	max-height: 200px;
}
</style>
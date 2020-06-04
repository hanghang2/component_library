<template>
	<div class="zl-tabs" v-bind:class="type">
		<li
			v-for="(item,index) in tabsData"
			v-bind:class="{'activeLi': index == activeLi}"
			:key="index"
			@click="tabsClick(index)"
		>
			<span>{{item}}</span>
			<span v-if="tabsClose" class="close" @click.stop="close(index)">
				<img src="@/assets/close.png" />
			</span>
		</li>
	</div>
</template>

<script>
export default {
	props: ["tabsData", "tabsClose", "type"],
	data() {
		return {
			activeLi: 0
		};
	},
	methods: {
		tabsClick(index) {
			this.activeLi = index;
		},
		close(index) {
			if (this.tabsData.length == 1) {
				return;
			}
			this.tabsData.splice(index, 1);
		}
	}
};
</script>

<style scoped>
.zl-tabs {
	border-bottom: 2px solid #e4e7ed;
}
.zl-tabs li {
	padding: 0 25px;
	height: 40px;
	box-sizing: border-box;
	line-height: 40px;
	display: inline-block;
	list-style: none;
	font-size: 14px;
	font-weight: 500;
	color: #303133;
	position: relative;
	cursor: pointer;
	margin-bottom: -2px;
}
.zl-tabs li.activeLi {
	transition: all 0.3s;
	color: #409eff;
	border-bottom: 2px solid #409eff;
}
.zl-tabs li:hover {
	transition: all 0.3s;
	color: #409eff;
}
.zl-tabs li .close {
	width: 16px;
    height: 16px;    
    position: absolute;
    right: 8px;
    height: 100%;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 111;
    display: flex;
    justify-content: center;
    align-items: center;
}
.zl-tabs li .close img:hover {
	background: #ddd;
	border-radius: 50%;
	transition: all 0.3s;
}
.zl-tabs.card {
	box-sizing: border-box;
	height: 41px;
	border-bottom: 1px solid #e4e7ed;
}
.zl-tabs.card li {
	height: 41px;
	line-height: 41px;
	box-sizing: border-box;
	border-top: 1px solid #e4e7ed;
	border-bottom: 1px solid transparent;
	border-left: 1px solid #e4e7ed;
	transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
		padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	margin-bottom: 0px;
}
.zl-tabs.card li.activeLi {
	transition: all 0.3s;
	color: #409eff;
	border-bottom: 1px solid #fff;
}
.zl-tabs.card li:nth-last-of-type(1) {
	border-right: 1px solid #e4e7ed;
}
.zl-tabs.border-card {
	background-color: #f5f7fa;
	border: 1px solid #e4e7ed;
}
.zl-tabs.border-card li {
	border-right: 1px solid transparent;
	border-left: 1px solid transparent;
}
.zl-tabs.border-card li.activeLi {
	transition: all 0.3s;
	color: #409eff;
	border-bottom: none;
	background-color: #fff;
	border-right: 1px solid #e4e7ed;
	border-left: 1px solid #e4e7ed;
}
.zl-tabs.border-card li:nth-of-type(1) {
	border-left: none;
}
</style>
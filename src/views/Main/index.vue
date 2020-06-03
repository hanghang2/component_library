<template>
	<div id="nav">
		<div class="main_left">
			<li class="nav-list nav-first">
				<a>组件</a>
			</li>
			<li class="nav-list nav-basic">
				<a>通用</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzButton">button按钮</router-link>
			</li>

			<li class="nav-list nav-basic">
				<a>Form表单</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzInput">input输入框</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzSelect">select选择器</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/checkbox">checkbox多选框</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzCascader">cascader联级器</router-link>
			</li>

			<li class="nav-list nav-basic">
				<a>数据</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzTable">table表格</router-link>
			</li>
			<li class="nav-list">
				<router-link to="/zzTree">tree树</router-link>
			</li>
		</div>
		<div class="main_body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {};
</script>
<style>
.main_body{
	text-align: left;
}
</style>

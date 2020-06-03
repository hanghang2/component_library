<template>
	<div class="checkbox">
		<h3>基础用法</h3>
		<div class="checkbox-item1">
			<zz-checkbox v-model="checked" disabled style="margin-right: 20px;">备选项</zz-checkbox>
			<zz-checkbox v-model="checked2" style="margin-right: 20px;">备选项</zz-checkbox>
			<zz-checkbox v-model="checked3" :indeterminate="true">备选项</zz-checkbox>
			<p class="info">设置 disabled 属性，设置 indeterminate 为true显示不确定状态</p>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			checked:true,
			checked2:false,
			checked3:false
		}
	}
}
</script>
<style scoped lang="scss">
.checkbox {
	background: #ffffff;
	height: 100%;
	h3{
		font-size: 14px;
		font-weight: normal;
		margin: 10px 0;
	}
	.checkbox-item1{
		border: 1px solid #dddddd;
		padding: 15px 20px;
		border-radius: 5px;
	}
	p.info{
		padding: 50px 0 0 0;
		color: #666666;
	}
}
</style>

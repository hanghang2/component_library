<template>
	<div class="checkbox">
		<h3>基础用法</h3>
		<div class="checkbox-item1">
			<zz-checkbox v-model="checked2" style="margin-right: 20px;" @change="changeChecked2">备选项</zz-checkbox>
		</div>
		<br />
		<br />
		<h3>禁用状态</h3>
		<div class="checkbox-item1">
			<zz-checkbox v-model="checked" disabled style="margin-right: 20px;">备选项</zz-checkbox>
			<br />
			<br />
			<div class="demo-contain">
				<p>设置 <code>disabled</code> 属性指定是否禁用 checkbox 组件。</p>
			</div>
		</div>
		<br />
		<br />
		<h3>不确定状态</h3>
		<div class="checkbox-item1">
			<zz-checkbox v-model="checked3" :indeterminate="true">备选项</zz-checkbox>
			<br />
			<br />
			<div class="demo-contain">
				<p>设置 <code>indeterminate</code> 为true显示不确定状态</p>
			</div>
		</div>
		<br />
		<br />
		<h3>属性</h3>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>value / v-model</td><td>绑定值</td><td>string / number</td><td>—</td><td>—</td></tr>
				<tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr>
				<tr><td>indeterminate</td><td>不确定</td><td>boolean</td><td>—</td><td>false</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a target="_blank" href="http://note.youdao.com/groupshare/?token=F596B30D111B443980CE0F3122CF2653&gid=116249960">http://note.youdao.com/groupshare/?token=F596B30D111B443980CE0F3122CF2653&gid=116249960</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			checked: true,
			checked2: false,
			checked3: false
		};
	},
	methods: {
		changeChecked2(val) {
			console.log(val);
		}
	}
};
</script>
<style scoped lang="scss">
.checkbox {
	background: #ffffff;
	height: 100%;
	h3 {
		font-size: 14px;
		font-weight: normal;
		margin: 10px 0;
	}
	.checkbox-item1 {
		border: 1px solid #dddddd;
		padding: 15px 20px;
		border-radius: 5px;
		&:hover {
			transition: all 0.5s;
			box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
		}
	}
	p.info {
		padding: 50px 0 0 0;
		color: #666666;
	}
	a {
		color: #0170fe;
	}
}
</style>

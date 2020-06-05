<template>
	<div class="Select">
		<p>基础用法</p>
		<div class="list">
			<div class="item">
				<zz-select :selectData="selectData" placeholder="请选择" :val="value" @getVal="getval"></zz-select>
			</div>
		</div>
		<p>禁用状态</p>
		<div class="list">
			<div class="item">
				<zz-select :selectData="selectData" :val="value" @getVal="getval" disabled></zz-select>
				<br />
				<br />
				<div class="demo-contain">
					<p>使用<code>disabled</code>属性指定是否禁用 input 组件。</p>
				</div>
			</div>
		</div>
		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>value / v-model</td><td>绑定值</td><td>string / number</td><td>—</td><td>—</td></tr>
				<tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr>
				<tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a target="_blank" href="http://note.youdao.com/groupshare/?token=B6BA549C1E884157AF900FC527AEFB22&gid=116249960">http://note.youdao.com/groupshare/?token=B6BA549C1E884157AF900FC527AEFB22&gid=116249960</a>
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
					value: "11",
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
			padding: 25px;
			border: 1px solid #dddddd;
			border-radius: 5px;
		}
		&:hover {
			transition: all .5s;
			box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
		}
	}
	a {
		color: #0170fe;
	}
}
</style>

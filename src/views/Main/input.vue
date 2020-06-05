<template>
	<div class="input">
		<p>基础用法</p>
		<div class="list">
			<zz-input v-model="inputvalue" placeholder="请输入内容"></zz-input>
		</div>
		<p>禁用状态</p>
		<div class="list">
			<zz-input v-model="inputvalue" placeholder="请输入内容" disabled></zz-input>
			<br />
			<div class="demo-contain">
				<p>使用<code>disabled</code>属性指定是否禁用 input 组件。</p>
			</div>
		</div>
		<p>可清空</p>
		<div class="list">
			<zz-input :value.sync="clearvalue" placeholder="请输入内容" clearable></zz-input>
			<br />
			<div class="demo-contain">
				<p>使用<code>clearable</code>属性即可得到一个可清空的输入框。</p>
			</div>
		</div>
		<p>类型</p>
		<div class="list">
			<zz-input v-model="inputvalue" type="textarea" rows="3" placeholder="请输入内容"></zz-input>
			<br />
			<div class="demo-contain">
				<p>使用<code>type</code>属性可以设置input的类型。textarea文本域高度可通过<code>rows</code>属性控制</p>
			</div>
		</div>
		<p>输入长度限制</p>
		<div class="list">
			<zz-input v-model="inputvalue" maxlength="10" show-word-limit placeholder="请输入内容"></zz-input>
			<br />
			<zz-input v-model="inputvalue" maxlength="10" type="textarea" rows="3" show-word-limit placeholder="请输入内容"></zz-input>
			<br />
			<div class="demo-contain">
				<p><code>maxlength</code>和<code>minlength</code>是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。
				对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置<code>show-word-limit</code>属性来展示字数统计。</p>
			</div>
		</div>

		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>type</td><td>类型</td><td>string</td><td>text，textarea</td><td>text</td></tr>
				<tr><td>value / v-model</td><td>绑定值</td><td>string / number</td><td>—</td><td>—</td></tr>
				<tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr>
				<tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr>
				<tr><td>clearable</td><td>是否可清空</td><td>boolean</td><td>—</td><td>false</td></tr>
				<tr><td>rows</td><td>输入框行数，只对 <code>type="textarea"</code> 有效</td><td>number</td><td>—</td><td>2</td></tr>
				<tr><td>maxlength</td><td>原生属性，最大输入长度</td><td>number</td><td>—</td><td>—</td></tr>
				<tr><td>minlength</td><td>原生属性，最小输入长度</td><td>number</td><td>—</td><td>—</td></tr>
				<tr><td>show-word-limit</td><td>是否显示输入字数统计</td><td>boolean</td><td>—</td><td>false</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a target="_blank" href="https://note.youdao.com/coshare/index.html?token=8C6F47F0AA344DA9B96BF7F3725C92EF&gid=116249960">https://note.youdao.com/coshare/index.html?token=8C6F47F0AA344DA9B96BF7F3725C92EF&gid=116249960</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			inputvalue: "",
			clearvalue: ""
		};
	}
};
</script>
<style scoped>
.input .list {
	margin-bottom: 40px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.input .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}

.input p {
	margin-bottom: 10px;
}
a {
	color: #0170fe;
}
</style>

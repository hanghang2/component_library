<template>
	<div class="tabs">
		<p>基础用法</p>
		<div class="list">
			<zz-tabs :tabsData="tabsData"></zz-tabs>
			<br />
			<div class="demo-contain">
				<p><code>type</code> 设置标签页类型。</p>
			</div>
		</div>
		<br />
		<p>card</p>
		<div class="list">
			<zz-tabs :tabsData="tabsData" type="card" tabsClose="true"></zz-tabs>
			<br />
			<div class="demo-contain">
				<p>type 为<code>card</code>，<code>tabsClose</code>标签是否可关闭。</p>
			</div>
		</div>
		<br />
		<p>border-card</p>
		<div class="list">
			<zz-tabs :tabsData="tabsData" type="border-card" tabsClose="true"></zz-tabs>
			<br />
			<div class="demo-contain">
				<p>type 为<code>border-card</code>。</p>
			</div>
		</div>
		<br />
		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>type</td><td>风格类型</td><td>string</td><td>card/border-card</td><td>—</td></tr>
				<tr><td>tabsData</td><td>标签页数据</td><td>array</td><td>—</td><td>[]</td></tr>
				<tr><td>tabsClose</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr>
			</tbody>
		</table>
		<br />
		<p>详细文档链接</p>
		<a href="http://note.youdao.com/groupshare/?token=59E04AA32D8C4A1EB38B9C25B7826EDF&gid=116249960" target="_blank">http://note.youdao.com/groupshare/?token=59E04AA32D8C4A1EB38B9C25B7826EDF&gid=116249960</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabsData: ["用户管理", "配置管理", "角色管理", "定时任务补偿"]
		};
	}
};
</script>
<style scoped>
.tabs .list {
	margin-bottom: 30px;
	border: 1px solid #ddd;
	padding: 25px;
	border-radius: 5px;
}
.tabs .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}

.tabs p {
	margin-bottom: 10px;
}
.tabs a {
	color: #0170fe;
}
</style>
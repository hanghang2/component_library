<template>
	<div class="Transfer">
		<p>基础用法</p>
		<div class="list">
			<zz-transfer :transferLeft="dataListLeft"
				:transferRight="datalistRight"
			></zz-transfer>
		</div>
		<br />
		<br />
		<p>自定义以及禁用</p>
		<div class="list">
			<zz-transfer leftName="列表1" rightName="列表2"
				:transferLeft="dataListLeft2"
				:transferRight="datalistRight2"
				leftButtom="到左边" rightButtom="到右边" 
			></zz-transfer>
			<br />
			<div class="demo-contain">
				<p><code>leftName</code>、<code>rightName</code>、<code>leftButtom</code>、<code>rightButtom</code>属性分别对左侧列表标题、右侧列表标题、左侧按钮名称、右侧按钮名称。
				数据项中可设置<code>disabled</code> 字段。</p>
			</div>
		</div>
		<br />
		<br />
		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>leftName</td><td>左侧列表标题</td><td>string</td><td>—</td><td>—</td></tr>
				<tr><td>rightName</td><td>右侧列表标题</td><td>string</td><td>—</td><td>—</td></tr>
				<tr><td>leftButtom</td><td>左侧按钮名称</td><td>string</td><td>—</td><td>—</td></tr>
				<tr><td>rightButtom</td><td>右侧按钮名称</td><td>string</td><td>—</td><td>—</td></tr>
				<tr><td>transferLeft</td><td>左侧列表数据</td><td>array</td><td>—</td><td>[]</td></tr>
				<tr><td>transferRight</td><td>右侧列表数据</td><td>array</td><td>—</td><td>[]</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a href="http://note.youdao.com/groupshare/?token=C71C52867D5B4CDFA32A93F9F6AC4AA6&gid=116249960" target="_blank">http://note.youdao.com/groupshare/?token=C71C52867D5B4CDFA32A93F9F6AC4AA6&gid=116249960</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dataListLeft: [
				{
					name: "首选项1",
					checked: false,
					checkid: 0,
				},
				{
					name: "首选项2",
					checked: false,
					checkid: 1
				},
				{
					name: "首选项3",
					checked: false,
					checkid: 2
				},
				{
					name: "首选项4",
					checked: false,
					checkid: 3
				},
				{
					name: "首选项5",
					checked: false,
					checkid: 4
				}
			],
			datalistRight: [
				{
					name: "首选项5",
					checked: false,
					checkid: 5,
				},
				{
					name: "首选项6",
					checked: false,
					checkid: 6
				},
				{
					name: "首选项7",
					checked: false,
					checkid: 7
				},
				{
					name: "首选项8",
					checked: false,
					checkid: 8
				},
				{
					name: "首选项9",
					checked: false,
					checkid: 9
				}
			],
			dataListLeft2: [
				{
					name: "首选项1",
					checked: false,
					checkid: 0,
					disabled: true,
				},
				{
					name: "首选项2",
					checked: false,
					checkid: 1
				},
				{
					name: "首选项3",
					checked: false,
					checkid: 2
				},
				{
					name: "首选项4",
					checked: false,
					checkid: 3
				},
				{
					name: "首选项5",
					checked: false,
					checkid: 4
				}
			],
			datalistRight2: [
				{
					name: "首选项5",
					checked: false,
					checkid: 5,
					disabled: true,
				},
				{
					name: "首选项6",
					checked: false,
					checkid: 6
				},
				{
					name: "首选项7",
					checked: false,
					checkid: 7,
					disabled: true,
				},
				{
					name: "首选项8",
					checked: false,
					checkid: 8
				},
				{
					name: "首选项9",
					checked: false,
					checkid: 9
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.Transfer {
	.list {
		margin-top: 20px;
		border: 1px solid #dddddd;
		padding: 25px;
		border-radius: 5px;
		span {
			float: left;
			width: 100px;
		}
		&:hover {
			transition: all 0.5s;
			box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
		}
	}
	a {
		color: #0170fe;
	}
}
</style>
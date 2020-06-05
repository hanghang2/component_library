<template>
	<div class="Button">
		<p>基础用法</p>
		<br />
		<div class="buttonList">
			<zz-button>默认按钮</zz-button>
			<zz-button type="primary">主要按钮</zz-button>
			<zz-button type="success">成功按钮</zz-button>
			<zz-button type="info">信息按钮</zz-button>
			<zz-button type="warning">警告按钮</zz-button>
			<zz-button type="danger">危险按钮</zz-button>
			<br />
			<br />
			<zz-button plain>朴素按钮</zz-button>
			<zz-button type="primary" plain>主要按钮</zz-button>
			<zz-button type="success" plain>成功按钮</zz-button>
			<zz-button type="info" plain>信息按钮</zz-button>
			<zz-button type="warning" plain>警告按钮</zz-button>
			<zz-button type="danger" plain>危险按钮</zz-button>
			<br />
			<br />
			<zz-button round>圆角按钮</zz-button>
			<zz-button type="primary" round>主要按钮</zz-button>
			<zz-button type="success" round>成功按钮</zz-button>
			<zz-button type="info" round>信息按钮</zz-button>
			<zz-button type="warning" round>警告按钮</zz-button>
			<zz-button type="danger" round>危险按钮</zz-button>
			<br />
			<br />
			<div class="demo-contain">
				<p>
					使用
					<code>type</code>、
					<code>plain</code>、
					<code>round</code>和
					<code>circle</code>属性来定义 Button 的样式。
				</p>
			</div>
		</div>
		<p>禁用状态</p>
		<br />
		<div class="buttonList">
			<zz-button disabled>禁用按钮</zz-button>
			<zz-button type="primary" disabled>主要按钮</zz-button>
			<zz-button type="success" disabled>成功按钮</zz-button>
			<zz-button type="info" disabled>信息按钮</zz-button>
			<zz-button type="warning" disabled>警告按钮</zz-button>
			<zz-button type="danger" disabled>危险按钮</zz-button>
			<br />
			<br />
			<zz-button disabled plain>朴素按钮</zz-button>
			<zz-button type="primary" disabled plain>主要按钮</zz-button>
			<zz-button type="success" disabled plain>成功按钮</zz-button>
			<zz-button type="info" disabled plain>信息按钮</zz-button>
			<zz-button type="warning" disabled plain>警告按钮</zz-button>
			<zz-button type="danger" :disabled="true" plain>危险按钮</zz-button>
			<br />
			<br />
			<div class="demo-contain">
				<p>
					使用
					<code>disabled</code>属性来定义按钮是否可用，它接受一个Boolean值。
				</p>
			</div>
		</div>

		<br />
		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr>
					<th>参数</th>
					<th>说明</th>
					<th>类型</th>
					<th>可选值</th>
					<th>默认值</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>type</td>
					<td>类型</td>
					<td>string</td>
					<td>primary / success / warning / danger / info / text</td>
					<td>—</td>
				</tr>
				<tr>
					<td>plain</td>
					<td>是否朴素按钮</td>
					<td>boolean</td>
					<td>—</td>
					<td>false</td>
				</tr>
				<tr>
					<td>round</td>
					<td>是否圆角按钮</td>
					<td>boolean</td>
					<td>—</td>
					<td>false</td>
				</tr>
				<tr>
					<td>circle</td>
					<td>是否圆形按钮</td>
					<td>boolean</td>
					<td>—</td>
					<td>false</td>
				</tr>
				<tr>
					<td>disabled</td>
					<td>是否禁用状态</td>
					<td>boolean</td>
					<td>—</td>
					<td>false</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	}
};
</script>
<style scoped>
.Button .buttonList {
	margin-bottom: 30px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.Button .buttonList:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
.Button .buttonList span {
	width: 80px;
	display: inline-block;
	text-align: center;
}
</style>

<template>
	<div class="NavMenu">
		<p>基础用法</p>
		<br/>
		<div class="list">
			<zz-nav-menu defaultActive="0" :navData="datas"></zz-nav-menu>
		</div>
		<p>自定义颜色</p>
		<br/>
		<div class="list">
			<zz-nav-menu :navData="datas" defaultActive="1" backgroundColor="#545c64" textColor="#fff"
			             activeTextColor="#ffd04b"></zz-nav-menu>
			<br/>
			<div class="demo-contain">
				<p>使用<code>background-color</code>、<code>text-color</code>和<code>active-text-color</code>，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。</p>
			</div>
		</div>
		<p>禁用菜单</p>
		<br/>
		<div class="list">
			<zz-nav-menu :navData="datas2" defaultActive="0" backgroundColor="#545c64" textColor="#fff"
			             activeTextColor="#ffd04b"></zz-nav-menu>
			<br/>
			<div class="demo-contain">
				<p>数据中心使用<code>disabled</code>参数指定是否禁用菜单。</p>
			</div>
		</div>
		<p>垂直菜单</p>
		<br/>
		<div class="list">
			<zz-nav-menu :navData="datas3" mode="vertical"></zz-nav-menu>
			<zz-nav-menu :navData="datas3" backgroundColor="#545c64" textColor="#fff"  mode="vertical"
			             activeTextColor="#ffd04b" style="float: right"></zz-nav-menu>			 
			<div style="clear: both;"></div>
			<br/>
			<div class="demo-contain">
				<p>使用<code>mode</code>属性可以使导航菜单变更为垂直模式。</p>
			</div>
		</div>
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
				<td>mode</td>
				<td>模式</td>
				<td>string</td>
				<td>horizontal / vertical</td>
				<td>horizontal</td>
			</tr>
			<tr>
				<td>navData</td>
				<td>菜单数据</td>
				<td>array</td>
				<td>—</td>
				<td>[]</td>
			</tr>
			<tr>
				<td>backgroundColor</td>
				<td>菜单的背景色</td>
				<td>string</td>
				<td>—</td>
				<td>#ffffff</td>
			</tr>
			<tr>
				<td>textColor</td>
				<td>菜单的文字颜色</td>
				<td>string</td>
				<td>—</td>
				<td>#333</td>
			</tr>
			<tr>
				<td>activeTextColor</td>
				<td>当前激活菜单的文字颜色</td>
				<td>string</td>
				<td>—</td>
				<td>#0170fe</td>
			</tr>
			<tr>
				<td>defaultActive</td>
				<td>当前激活菜单的 index</td>
				<td>string</td>
				<td>—</td>
				<td>—</td>
			</tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a target="_blank" href="http://note.youdao.com/groupshare/?token=27074E7FC3E94BB09360A083A48854D6&gid=116249960">http://note.youdao.com/groupshare/?token=27074E7FC3E94BB09360A083A48854D6&gid=116249960</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datas: [
				{ name: "处理中心" },
				{
					name: "我的工作台",
					child: [
						{ name: "选项1" },
						{ name: "选项2" },
						{ name: "选项3" },
						{
							name: "选项4",
							child: [
								{ name: "选项4-1" },
								{ name: "选项4-2" },
								{
									name: "选项4-3",
									child: [
										{ name: "选项4-3-1" },
										{ name: "选项4-3-2" },
										{ name: "选项4-3-3" },
										{ name: "选项4-3-4" }
									]
								}
							]
						}
					]
				},
				{ name: "消息中心" },
				{ name: "订单管理" }
			],
			datas2: [
				{ name: "处理中心" },
				{
					name: "我的工作台",
					child: [
						{ name: "选项1" },
						{ name: "选项2" },
						{ name: "选项3", disabled: true },
						{
							name: "选项4",
							child: [
								{ name: "选项1" },
								{ name: "选项2" },
								{
									name: "选项3", disabled: true,
									child: [
										{ name: "选项1" },
										{ name: "选项2" },
										{ name: "选项3" },
										{ name: "选项4" }
									]
								}
							]
						}
					]
				},
				{ name: "消息中心", disabled: true },
				{ name: "订单管理" }
			],
			datas3: [
				{ name: "处理中心" },
				{
					name: "我的工作台",
					child: [
						{ name: "选项1" },
						{ name: "选项2" },
						{ name: "选项3" },
						{ name: "选项4",}
					]
				},
				{ 
					name: "消息中心",
					child: [
						{ name: "选项1" },
						{ name: "选项2" },
						{
							name: "选项3",
							child: [
								{ name: "选项3-1" },
								{ name: "选项3-2" },
								{ name: "选项3-3" },
								{ name: "选项3-4" }
							]
						}
					] 
				},
				{ name: "订单管理" }
			],
		};
	},
	methods: {}
};
</script>

<style scoped>
.NavMenu .list {
	margin-bottom: 30px;
	border: 1px solid #ddd;
	padding: 25px;
	border-radius: 5px;
}

.NavMenu .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
.vertical {
	float: left;
	margin-right: 50px;
}
a {
	color: #0170fe;
}
</style>

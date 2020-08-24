<template>
	<div class="tooltip">
		<p>基础用法</p>
		<div class="list">
			<div class="btns">
				<zz-tooltip class="margin20 marginLeft100" :tooltipData="data5">
					<zz-button>上左</zz-button>
				</zz-tooltip>
				<zz-tooltip :tooltipData="data4">
					<zz-button>上边</zz-button>
				</zz-tooltip>
				<zz-tooltip :tooltipData="data6">
					<zz-button>上右</zz-button>
				</zz-tooltip>
			</div>
			<div>
				<zz-tooltip class="zbtn marginRight200 margin20" :tooltipData="data7">
                    <zz-button> 左上</zz-button>
				</zz-tooltip>
				<zz-tooltip class="zbtn marginRight200 margin20" :tooltipData="data8">
					<zz-button>右上</zz-button>
				</zz-tooltip>
				<br />
				<br />
				<zz-tooltip class="zbtn marginRight200 margin20" :tooltipData="data9">
                    <zz-button>左边</zz-button>
				</zz-tooltip>
				<zz-tooltip class="zbtn marginRight200 margin20" :tooltipData="data10">
					<zz-button>右边</zz-button>
				</zz-tooltip>
				<br />
				<br />
				<zz-tooltip class="zbtn marginRight200 margin20" :tooltipData="data11">
                    <zz-button>左下</zz-button>
				</zz-tooltip>
				<zz-tooltip class="zbtn marginRight200 margin20" :tooltipData="data12">
					<zz-button>右下</zz-button>
				</zz-tooltip>
			</div>
			<div class="btns">
				<zz-tooltip class="margin20 marginLeft100" :tooltipData="data3">
					<zz-button>下左</zz-button>
				</zz-tooltip>
				<zz-tooltip :tooltipData="data1">
					<zz-button>下边</zz-button>
				</zz-tooltip>
				<zz-tooltip :tooltipData="data2">
					<zz-button>下右</zz-button>
				</zz-tooltip>
			</div>
		</div>
		<p>主题</p>
        <div class="list">
            <zz-tooltip :tooltipData="data4" effect="dark">
                <zz-button>Dark</zz-button>
            </zz-tooltip>
            <zz-tooltip :tooltipData="data1" effect="light">
                <zz-button>Light</zz-button>
            </zz-tooltip>
			<br />
			<br />
			<div class="demo-contain">
				<p>通过设置<code>effect</code>属性来改变主题，默认为<code>light</code>。</p>
			</div>
        </div>
        <p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
                <tr><td>effect</td><td>选择提供的主题</td><td>string</td><td>light/dark</td><td>dark</td></tr>
				<tr><td>tooltipData</td><td>提示内容数据</td><td>array</td><td>—</td><td>[]</td></tr>
			</tbody>
		</table>
        <p>详细文档链接</p>
        <a target="_blank" href="http://note.youdao.com/groupshare/?token=38F11D12CD5E4DCA9A2BF85D5D608097&gid=116249960">http://note.youdao.com/groupshare/?token=38F11D12CD5E4DCA9A2BF85D5D608097&gid=116249960</a>
	</div>
</template>

<script>
export default {
	name: "Index24",
	data() {
		return {
			data1: {
				content: "bottomCenter 提示文字",
				alignment: "bottomCenter"
			},
			data2: {
				content: "bottomRight 提示文字",
				alignment: "bottomRight"
			},
			data3: {
				content: "bottomLeft 提示文字",
				alignment: "bottomLeft"
			},
			data4: {
				content: "topCenter 提示文字",
				alignment: "topCenter"
			},
			data5: {
				content: "topLeft 提示文字",
				alignment: "topLeft"
			},
			data6: {
				content: "topRight 提示文字",
				alignment: "topRight"
			},
			data7: {
				content: "leftTop 提示文字",
				alignment: "leftTop"
			},
			data8: {
				content: "rightTop 提示文字",
				alignment: "rightTop"
			},
			data9: {
				content: "leftCenter 提示文字",
				alignment: "leftCenter"
			},
			data10: {
				content: "rightCenter 提示文字",
				alignment: "rightCenter"
			},
			data11: {
				content: "leftBottom 提示文字",
				alignment: "leftBottom"
			},
			data12: {
				content: "rightBottom 提示文字",
				alignment: "rightBottom"
			}
		};
	},
	methods: {}
};
</script>

<style scoped>
.tooltip .list {
	margin-bottom: 40px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.tooltip .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
code {
	background-color: #f9fafc;
	padding: 0 4px;
	border: 1px solid #eaeefb;
	border-radius: 4px;
}
.tooltip p {
	margin-bottom: 10px;
}
a {
	color: #0170fe;
}
.marginLeft100 {
	margin-left: 100px;
}
.marginRight200 {
	margin-right: 300px;
}
</style>
<template>
	<div class="Slider">
		<p>基础用法</p>
		<div class="list">
			<zz-slider v-model="value1" id="Slider1"></zz-slider>
		</div>
		<br />
		<br />
		<p>隐藏Tooltip</p>
		<div class="list">
			<zz-slider v-model="value2" id="Slider2" :show-tooltip="false"></zz-slider>
			<br />
			<br />
			<div class="demo-contain">
				<p>设置 <code>show-tooltip</code> 属性为false隐藏Tooltip。</p>
			</div>
		</div>
		<br />
		<br />
		<p>禁用</p>
		<div class="list">
			<zz-slider v-model="value2" id="Slider3" disabled></zz-slider>
			<br />
			<br />
			<div class="demo-contain">
				<p>设置 <code>disabled</code> 属性指定是否禁用 slider 组件。</p>
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
				<tr><td>value / v-model</td><td>绑定值</td><td>number</td><td>—</td><td>0</td></tr>
				<tr><td>show-tooltip</td><td>是否隐藏Tooltip</td><td>boolean</td><td>—</td><td>true</td></tr>
				<tr><td>disabled</td><td>是否禁用组件</td><td>boolean</td><td>—</td><td>false</td></tr>
			</tbody>
		</table>
		<br />
		<br />
		<p>详细文档链接</p>
		<a href="http://note.youdao.com/groupshare/?token=2A339311A87544FAACE3CFDE0009BB92&gid=116249960" target="_blank">http://note.youdao.com/groupshare/?token=2A339311A87544FAACE3CFDE0009BB92&gid=116249960</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: 90,
			value2: 3,
			value3: 10
		};
	}
};
</script>

<style lang="scss" scoped>
.Slider {
	.list {
		margin-top: 20px;
		height: 130px;
		border: 1px solid #dddddd;
		border-radius: 5px;
		padding: 50px 20px 20px 20px;
		span {
			float: left;
			width: 100px;
		}
		.zz-Slider {
			float: left;
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
<template>
	<div class="carousel">
		<p>基础用法</p>
		<div class="list">
			<zz-carousel height="200px">
				<div class="item-banner" v-for="(item,index) in bannerdata" :key="index">
					{{index + 1}}
				</div>
			</zz-carousel>
		</div>
		<p>是否自动切换</p>
		<div class="list">
			<zz-carousel height="200px" autoplay="false">
				<div class="item-banner" v-for="(item,index) in bannerdata" :key="index">
					{{index + 1}}
				</div>
			</zz-carousel>
			<br />
			<div class="demo-contain">
				<p>设置<code>autoplay</code>为<code>false</code>取消走马灯自动切换。</p>
			</div>
		</div>
		<p>自动切换时间间隔</p>
		<div class="list">
			<zz-carousel height="200px" interval="3000">
				<div class="item-banner" v-for="(item,index) in bannerdata" :key="index">
					{{index + 1}}
				</div>
			</zz-carousel>
			<br />
			<div class="demo-contain">
				<p>设置<code>interval</code>自动切换的时间间隔，单位为毫秒。</p>
			</div>
		</div>
		
		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
                <tr><td>height</td><td>走马灯的高度</td><td>string</td><td>—</td><td>—</td></tr>
                <tr><td>autoplay</td><td>是否自动切换</td><td>boolean</td><td>—</td><td>true</td></tr>
                <tr><td>interval</td><td>自动切换的时间间隔，单位为毫秒</td><td>number</td><td>—</td><td>2000</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a href="http://note.youdao.com/groupshare/?token=FC3CD44595D74003A078C9AA771BD91A&gid=116249960" target="_blank">http://note.youdao.com/groupshare/?token=FC3CD44595D74003A078C9AA771BD91A&gid=116249960</a>
	</div>
</template>

<script>
export default {
	name: "Index26",
	data() {
		return {
			bannerdata: ["", "", "", ""]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.carousel p {
	margin-bottom: 10px;
}
.carousel .list {
	margin-bottom: 30px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.carousel .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
.carousel .list span {
	width: 80px;
	display: inline-block;
	text-align: center;
}
a {
	color: #0170fe;
}
.item-banner:nth-of-type(1) {
	background: #99a9bf;
}
.item-banner:nth-of-type(2) {
	background: #d3dce6;
}
.item-banner:nth-of-type(3) {
	background: #99a9bf;
}
.item-banner:nth-of-type(4) {
	background: #d3dce6;
}
</style>
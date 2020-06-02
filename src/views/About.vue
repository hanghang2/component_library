<template>
	<div class="about">
		<h3>版本</h3>
		<p>
			<a href="https://github.com/15738802288/component_library">https://github.com/15738802288/component_library</a>
		</p>
		<h3>开始</h3>
		<p>1、zzComponets文件夹放到项目中(可以使用 Git Submodule 添加子子模块的方式，公共资源的处理方式)</p>
		<p>2、引入使用</p>
		<div class="daiam">
			<p>// 全局引入并注册</p>
			<p>import zzComponets from '@/components/zzComponets'</p>
			<p>Vue.use(zzComponets)</p>
			<p>//单个引入、注册</p>
			<p>import {zzDemo} from '@/components/zzComponets'</p>
			<p>Vue.component('zzDemo',zzDemo)</p>
		</div>
		<p>3、说明</p>
		<div class="txt">
			<p>a、样式 ： 组件使用css，不引入外部资源，不用依赖安装其它模块；</p>
			<p>b、图标库可以使用项目zzComponets目录下的文件，或者安装引入使用阿里云图标；</p>
		</div>
	</div>
</template>

<style scoped>
.about {
	text-align: left;
	width: 1200px;
	margin: 0 auto;
	padding: 20px;
}
.about h3 {
	margin: 10px 0;
	margin-top: 30px;
}
.about p {
	margin: 10px 0;
	font-size: 14px;
}
.about p a {
	color: #1890ff;
}
.about .daiam {
	background: #f5f5f5;
	padding: 12px 20px;
	border: 1px solid #eaeefb;
	font-family: Menlo,Monaco,Consolas,Courier,monospace;
}
.about .daiam p {
	font-size: 12px;
}
.about .txt {
	padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
}
</style>
<template>
    <div class="alert">
		<p>基础用法</p>
        <p>页面中的非浮层元素，不会自动消失。</p>
        <div class="list">
            <zz-alert title="成功提示的文案" type="success"></zz-alert>
            <zz-alert title="消息提示的文案" type="info"></zz-alert>
            <zz-alert title="警告提示的文案" type="warning"></zz-alert>
            <zz-alert title="错误提示的文案" type="error"></zz-alert>
        </div>
		<p>主题</p>
        <p>Alert 组件提供了两个不同的主题：<code>light</code>和<code>dark</code>。</p>
        <div class="list">
            <zz-alert title="成功提示的文案" type="success" effect="dark"></zz-alert>
            <zz-alert title="消息提示的文案" type="info" effect="dark"></zz-alert>
            <zz-alert title="警告提示的文案" type="warning" effect="dark"></zz-alert>
            <zz-alert title="错误提示的文案" type="error" effect="dark"></zz-alert>
			<br />
			<div class="demo-contain">
				<p>通过设置<code>effect</code>属性来改变主题，默认为<code>light</code>。</p>
			</div>
        </div>
        <p>自定义关闭按钮</p>
        <div class="list">
            <zz-alert title="不可关闭的 alert" type="success" :closable="false"></zz-alert>
            <zz-alert title="自定义 closeText" type="info" closeText="知道了"></zz-alert>
			<br />
			<div class="demo-contain">
				<p>自定义关闭按钮<code>closeText</code>文字。</p>
			</div>
        </div>
        <p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
                <tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr>
                <tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>success</td></tr>
                <tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>true</td></tr>
                <tr><td>close-text</td><td>关闭按钮自定义文本</td><td>string</td><td>—</td><td>—</td></tr>
                <tr><td>effect</td><td>选择提供的主题</td><td>string</td><td>light/dark</td><td>light</td></tr>
			</tbody>
		</table>
        <p>详细文档链接</p>
		<a href="http://note.youdao.com/groupshare/?token=BB7FA5BD69B544FEAB1F3042314E1FE0&gid=116249960" target="_blank">http://note.youdao.com/groupshare/?token=BB7FA5BD69B544FEAB1F3042314E1FE0&gid=116249960</a>
    </div>
</template>

<style scoped>
.alert .list {
	margin-bottom: 40px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.alert .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
code {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}
.alert p {
	margin-bottom: 10px;
}
a {
	color: #0170fe;
}
</style>
<template>
    <div class="dialog">
		<p>基础用法</p>
		<div class="list">
            <zz-button type="primary" @click.native="dialog()">点击打开Dialog</zz-button>
			<zz-dialog title="提示" :visible.sync="addDialog" v-if="addDialog">
                <p slot="content">这是一段信息</p>
                <template slot="bottom">
                    <zz-button type="primary" @click.native="addDialog = false">确 定</zz-button>
                    <zz-button @click.native="addDialog = false">取 消</zz-button>
                </template>
            </zz-dialog>
		</div>

		<p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
                <tr><td>visible</td><td>是否显示 Dialog，支持 .sync 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr>
                <tr><td>title</td><td>Dialog 的标题</td><td>string</td><td>—</td><td>—</td></tr>
                <tr><td>height</td><td>Dialog 的高度</td><td>string</td><td>—</td><td>500px</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<a target="_blank" href="http://note.youdao.com/groupshare/?token=36F839DB9E7049FCBA540FB44E2F1109&gid=116249960">http://note.youdao.com/groupshare/?token=36F839DB9E7049FCBA540FB44E2F1109&gid=116249960</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            addDialog: false
        }
    },
    methods: {
        dialog(){
            this.addDialog = true
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog p {
	margin-bottom: 10px;
}
.dialog .list {
	margin-bottom: 30px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.dialog .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
.dialog .list span {
	width: 80px;
	display: inline-block;
	text-align: center;
}
a {
	color: #0170fe;
}
</style>
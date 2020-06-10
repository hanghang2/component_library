<template>
	<div class="Table">
		<p>基础用法</p>
		<br />
		<div class="List">
			<zz-table :checkedArr="checkedArr" :tableData="tableData" :tableheader="tableheader"></zz-table>
		</div>
		<p>固定列</p>
		<br />
		<div class="List">
			<zz-table :checkedArr="checkedArr" :tableData="tableData" :tableheader="tableheader2">
				<template slot="toolbar" slot-scope="scope">
					<zz-button class="zbtn" @click.native="view(scope.row,scope.i)">查看</zz-button>
					<zz-button class="zbtn" @click.native="edit(scope.row,scope.i,scope.editshow)">编辑</zz-button>
				</template>
			</zz-table>
		</div>
		<p>多选</p>
		<br />
		<div class="List">
			<zz-table :checkedArr="checkedArr" :tableData="tableData" :tableheader="tableheader3">
				<template slot="toolbar" slot-scope="scope">
					<zz-button class="zbtn" @click.native="view(scope.row,scope.i)">查看</zz-button>
					<zz-button class="zbtn" @click.native="edit(scope.row,scope.i,scope.editshow)">编辑</zz-button>
				</template>
			</zz-table>
			<br />
			<zz-button type="primary" @click.native="getCheck">选中提交</zz-button>
		</div>
		<p>属性</p>
		<br />
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>tableData</td><td>列表数据</td><td>array</td><td>—</td><td>[]</td></tr>
				<tr><td>tableheader</td><td>表头数据</td><td>array</td><td>—</td><td>[]</td></tr>
				<tr><td>checkedArr</td><td>多选数据</td><td>array</td><td>—</td><td>[]</td></tr>
			</tbody>
		</table>
		<p>详细文档链接</p>
		<br />
		<a href="http://note.youdao.com/groupshare/?token=D38FE23A111D4734B518DBAD77A6CED4&gid=116249960" target="_blank">http://note.youdao.com/groupshare/?token=D38FE23A111D4734B518DBAD77A6CED4&gid=116249960</a>
	</div>
</template>

<script>
export default {
	name: "Table",
	data() {
		return {
			checkedArr: [],
			tableheader: tableheader,
			tableheader2: tableheader2,
			tableheader3: tableheader3,
			tableData: tableData
		};
	},
	methods: {
		view(row, index, scope) {
			console.log(row);
			console.log(index);
			console.log(scope);
		},
		edit(oldRow, index, editShow, newRow) {
			this.$set(editShow, index, !editShow[index]);
			console.log(oldRow);
			console.log(index);
			console.log(newRow);
		},
		getCheck() {
			console.log(this.checkedArr);
		}
	}
};

let tableheader = [
		{
			name: "日期",
			field: "date",
			width: 100,
			edit: true
		},
		{
			name: "姓名",
			field: "name",
			width: 100,
			edit: true
		},
		{
			name: "省份",
			field: "province",
			width: 100,
			edit: true
		},
		{
			name: "市区",
			field: "city",
			width: 100,
			edit: true
		},
		{
			name: "地址",
			field: "address",
			width: 300,
			edit: true
		},
		{
			name: "邮编",
			field: "zip",
			width: 100,
			edit: false
		},
	],
	
	tableheader2 = [
		{
			name: "日期",
			field: "date",
			width: 100,
			edit: true
		},
		{
			name: "姓名",
			field: "name",
			width: 100,
			edit: true
		},
		{
			name: "省份",
			field: "province",
			width: 100,
			edit: true
		},
		{
			name: "市区",
			field: "city",
			width: 100,
			edit: true
		},
		{
			name: "地址",
			field: "address",
			width: 300,
			edit: true
		},
		{
			name: "邮编",
			field: "zip",
			width: 100,
			edit: false
		},
		{
			name: "操作",
			width: 150,
			fixed: "right",
			slot: "toolbar"
		}
	],
	tableheader3 = [
		{
			name: "checked",
			width: 50,
			check: true
		},
		{
			name: "日期",
			field: "date",
			width: 100,
			edit: true
		},
		{
			name: "姓名",
			field: "name",
			width: 100,
			edit: true
		},
		{
			name: "省份",
			field: "province",
			width: 100,
			edit: true
		},
		{
			name: "市区",
			field: "city",
			width: 100,
			edit: true
		},
		{
			name: "地址",
			field: "address",
			width: 300,
			edit: true
		},
		{
			name: "邮编",
			field: "zip",
			width: 100,
			edit: false
		},
		{
			name: "操作",
			width: 150,
			fixed: "right",
			slot: "toolbar"
		}
	],
	tableData = [
		{
			date: "2016-05-03",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-02",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-04",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-01",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-03",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-02",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-04",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		},
		{
			date: "2016-05-01",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}
	];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Table {
	background: #ffffff;
}
.Table .List {
	margin-bottom: 30px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
	width: 800px;
}
.Table .List:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
.zbtn {
	border: none;
	padding: 5px;
}
.zbtn:hover {
	background: none;
}
.Table a {
	color: #0170fe;
}
</style>

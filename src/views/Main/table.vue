<template>
	<div class="Table">
		<div style="width: 800px;margin: 20px;">
			<zz-table :checkedArr="checkedArr" :tableData="tableData" :tableheader="tableheader">
				<template slot="toolbar" slot-scope="scope">
					<button class="zbtn" @click="view(scope.row,scope.i)" type="text" size="small">查看</button>
					<button class="zbtn" @click="edit(scope.row,scope.i,scope.editshow)" type="text" size="small">编辑
					</button>
				</template>
			</zz-table>
			<button @click="getCheck">选中提交</button>
		</div>

	</div>
</template>

<script>

export default {
	name: "Table",
	data() {
		return {
			checkedArr: [],
			tableheader: tableheader,
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
			name: "checked",
			width: 50,
			check: true
		}, {
			name: "日期",
			field: "date",
			width: 100,
			edit: true
		}, {
			name: "姓名",
			field: "name",
			width: 100,
			edit: true
		}, {
			name: "省份",
			field: "province",
			width: 300,
			edit: true
		}, {
			name: "市区",
			field: "city",
			width: 100,
			edit: true
		}, {
			name: "地址",
			field: "address",
			width: 300,
			edit: true
		}, {
			name: "邮编",
			field: "zip",
			width: 100,
			edit: false
		}, {
			name: "操作",
			width: 200,
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
		}, {
			date: "2016-05-02",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}, {
			date: "2016-05-04",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}, {
			date: "2016-05-01",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}, {
			date: "2016-05-03",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}, {
			date: "2016-05-02",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}, {
			date: "2016-05-04",
			name: "王小虎",
			province: "上海",
			city: "普陀区",
			address: "上海市普陀区金沙江路 1518 弄",
			zip: 200333
		}, {
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
	height: 100%;
}

</style>

<template>
	<div class="divFIxed">
		<div class="tableDiv">
			<table border="" cellspacing="" cellpadding="">
				<thead>
					<tr>
						<th v-for="(item,index) in tableheader" :key="index">
							<!--右漂浮-->
							<div v-if="item.fixed == 'right'" class="table-cell-fixed"
							     v-bind:style="{width:item.width*1 + 2 + 'px'}">
								<span v-text="item.name"></span>
							</div>
							<!--其它行-->
							<div v-if="!item.check" class="table-cell" v-bind:style="{width:item.width + 'px'}">
								<span v-text="item.name"></span>
							</div>
							<!--checked-->
							<div v-if="item.check" class="table-cell center" v-bind:style="{width:item.width + 'px'}">
								<span v-if="item.name != 'checked'" v-text="item.name"></span>
								<zzCheckbox v-if="item.name == 'checked'" type="checkbox" v-model="allCheck"></zzCheckbox>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in tableData" v-bind:class="{active: checkedArr[index]}" :key="index">
						<!--checked-->
						<td v-if="checked">
							<div class="table-cell center">
								<zzCheckbox v-if="checked" type="checkbox" v-model="checkedArr[index]"></zzCheckbox>
							</div>
						</td>
						<!--其它行-->
						<template v-for="(itemAttr,index2) in tableheader">
							<td :key="index2" v-if="itemAttr.field">
								<div  class="table-cell" v-show="!editShow[index]"
								      v-text="item[itemAttr.field]">
								</div>
								<input  v-show="edit(editShow[index])" v-bind:disabled="!itemAttr.edit"
								        class="input-table"
								        v-model="item[itemAttr.field]"/>
							</td>
						</template>
						<!--右漂浮-->
						<template v-for="(itemAttr,index) in tableheader">
							<td :key="'edit' + index" v-if="itemAttr.slot">
								<div v-if="itemAttr.fixed == 'right'" class="table-cell-fixed"
								     v-bind:style="{width:itemAttr.width*1 + 2 + 'px'}">
									<slot :name="itemAttr.slot" :row="item" :i="index" :editshow="editShow"></slot>
								</div>
								<div class="table-cell" v-bind:style="{width:itemAttr.width*1 + 2 + 'px'}">
									<slot :name="itemAttr.slot" :row="item" :i="index" :editshow="editShow"></slot>
								</div>
							</td>
						</template>

					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	props: [
		"tableData", "tableheader", "checkedArr"
	],
	data() {
		return {
			editShow: [],
			checked: false,
			//checkedArr:[],
			allCheck: false
		};
	},
	watch: {
		allCheck: function(val) {
			if(this.checkedArr){
				for (var i = 0; i < this.checkedArr.length; i++) {
					this.checkedArr[i] = val;
				}
			}
		}
	},
	methods: {
		edit(val1) {
			return val1;
			//return val1&&val2;
		}
	},
	created: function() {
		for (var j = 0; j < this.tableData.length; j++) {
			this.editShow.push(false);
			if (this.tableheader[0].check) {
				this.checked = true;
				this.checkedArr.push(false);
			}
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
	text-align: center;
}

.divFIxed {
	position: relative;
	overflow: hidden;
	width: 100%;
	border-left: 1px solid #ebeef5;
	border-right: 1px solid #ebeef5;
}

.tableDiv {
	width: calc(100% + 2px);
	margin-left: -1px;
	overflow-x: auto;
}

table {
	border-collapse: collapse;
	border: 1px solid #ebeef5;
	text-align: center;
}

.table-cell {
	padding: 6px;
	font-weight: 400;
}
th {
	color: #909399;
}

.table-cell-fixed {
	position: absolute;
	right: -1px;
	background-color: white;
	padding: 6px;
	border-left: 1px solid #ebeef5;
	border-right: 1px solid #ebeef5;
	box-shadow: -3px 0px 3px 0px #f5f5f5;
}

.input-table {
	width: 90%;
	display: block;
	margin: 0px auto;
	border: 1px solid #ebeef5;
	outline: none;
	color: #969399;   
	height: 30px;
    padding: 0 10px;
}
input:disabled {
	color: #c0c4cc;
	cursor: not-allowed;
	background-color: #f5f7fa;
    border-color: #e4e7ed;
}

tr.active {
	background-color: #ecf5ff;
}

tbody tr:hover {
	background-color: #f5f7fa;
}
</style>

<template>
	<div class="zlTransfer">
		<div class="item_left">
			<p class="shuttle-title" @click="isAllCheck()">
				<i class="shuttle-check" v-bind:class="{'is-checked': isallcheck,'is-havecheck':ishavecheck}"></i>
				<span class="shuttle-title-text">{{leftName}}</span>
				<span class="shuttle-title-num">{{num}}/{{leftData.length}}</span>
			</p>
			<div class="shuttle-body">
				<li v-for="(item,index) in leftData" :key="item.checkid" @click="isCheck(index)">
					<i class="shuttle-check" v-bind:class="{'is-checked': item.checked}"></i>
					<span v-text="item.name"></span>
				</li>
			</div>
		</div>
		<div class="item_middle">
			<zz-button type="primary" @click.native="goLeft()" :disabled="disabledLeft">
				<img src="@/assets/RightWhite.png" />
			</zz-button>
			<zz-button type="primary" @click.native="goRight()" :disabled="disabledRight">
				<img src="@/assets/leftWhite.png" />
			</zz-button>
		</div>
		<div class="item_right">
			<p class="shuttle-title" @click="isAllCheck2()">
				<i class="shuttle-check" v-bind:class="{'is-checked': isallcheck2,'is-havecheck':ishavecheck2}"></i>
				<span class="shuttle-title-text">{{rightName}}</span>
				<span class="shuttle-title-num">{{num2}}/{{rightData.length}}</span>
			</p>
			<div class="shuttle-body">
				<li v-for="(item,index2) in rightData" :key="item.checkid" @click="isCheck2(index2)">
					<i class="shuttle-check" v-bind:class="{'is-checked': item.checked}"></i>
					<span v-text="item.name"></span>
				</li>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		leftName: {
			default: function() {
				return "左";
			},
			type: String
		},
		rightName: {
			default: function() {
				return "右";
			},
			type: String
		},
		transferLeft: {
			default: function() {
				return [];
			},
			type: Array
		},
		transferRight: {
			default: function() {
				return [];
			},
			type: Array
		}
	},
	data() {
		return {
			isallcheck: false,
			ishavecheck: false,
			num: 0,
			num2: 0,
			isallcheck2: false,
			ishavecheck2: false,
			leftData: [],
			rightData: [],
			disabledLeft: true,
			disabledRight: true
		};
	},
	methods: {
		getNum(num) {
			this.num = num;
		},
		isAllCheck() {
			this.isallcheck = !this.isallcheck;
			var num = 0;
			for (var i = 0; i < this.leftData.length; i++) {
				this.leftData[i].checked = this.isallcheck;
				if (this.leftData[i].checked) num++;
			}
			this.ishavecheck = false;
			this.getNum(num);
		},
		isCheck(index) {
			if (index != "no") {
				this.leftData[index].checked = !this.leftData[index].checked;
			}
			if (this.leftData.length == 0) {
				this.isallcheck = false;
				this.ishavecheck = false;
				this.getNum(0);
				return;
			}
			//判断选中了多少位全选改变状态
			var all = true,
				no = false,
				num = 0;
			for (var i = 0; i < this.leftData.length; i++) {
				all = all && this.leftData[i].checked;
				no = no || this.leftData[i].checked;
				if (this.leftData[i].checked) num++;
			}
			if (all) {
				this.isallcheck = true;
				this.ishavecheck = false;
			} else if (no) {
				this.isallcheck = false;
				this.ishavecheck = true;
			} else {
				this.isallcheck = false;
				this.ishavecheck = false;
			}
			this.getNum(num);
		},
		getNum2(num2) {
			this.num2 = num2;
		},
		isAllCheck2() {
			this.isallcheck2 = !this.isallcheck2;
			var num2 = 0;
			for (var i = 0; i < this.rightData.length; i++) {
				this.rightData[i].checked = this.isallcheck2;
				if (this.rightData[i].checked) num2++;
			}
			this.ishavecheck2 = false;
			this.getNum2(num2);
		},
		isCheck2(index) {
			if (index != "no2") {
				this.rightData[index].checked = !this.rightData[index].checked;
			}
			if (this.rightData.length == 0) {
				this.isallcheck2 = false;
				this.ishavecheck2 = false;
				this.getNum2(0);
				return;
			}
			//判断选中了多少位全选改变状态
			var all2 = true,
				no2 = false,
				num2 = 0;
			for (var i = 0; i < this.rightData.length; i++) {
				all2 = all2 && this.rightData[i].checked;
				no2 = no2 || this.rightData[i].checked;
				if (this.rightData[i].checked) num2++;
			}
			if (all2) {
				this.isallcheck2 = true;
				this.ishavecheck2 = false;
			} else if (no2) {
				this.isallcheck2 = false;
				this.ishavecheck2 = true;
			} else {
				this.isallcheck2 = false;
				this.ishavecheck2 = false;
			}
			this.getNum2(num2);
		},
		goRight() {
			for (var i = 0; i < this.leftData.length; ) {
				if (this.leftData[i].checked) {
					this.leftData[i].checked = false;
					this.rightData.push(this.leftData[i]);
					this.leftData.splice(i, 1);
				} else {
					i++;
				}
			}
		},
		goLeft() {
			for (var i = 0; i < this.rightData.length; ) {
				if (this.rightData[i].checked) {
					this.rightData[i].checked = false;
					this.leftData.push(this.rightData[i]);
					this.rightData.splice(i, 1);
				} else {
					i++;
				}
			}
		}
	},
	watch: {
		leftData() {
			this.isCheck("no");
		},
		rightData() {
			this.isCheck2("no2");
		},
		num(curVal, oldVal) {
			console.log(oldVal);
			if (curVal > 0) {
				this.disabledRight = false;
			} else {
				this.disabledRight = true;
			}
		},
		num2(curVal, oldVal) {
			console.log(oldVal);
			if (curVal > 0) {
				this.disabledLeft = false;
			} else {
				this.disabledLeft = true;
			}
		}
	},
	created() {
		this.leftData = this.transferLeft;
		this.rightData = this.transferRight;
	}
};
</script>
<style scoped>
.zlTransfer .item_left,
.zlTransfer .item_right {
	border: 1px solid #ebeef5;
	border-radius: 4px;
	overflow: hidden;
	background: #fff;
	display: inline-block;
	vertical-align: middle;
	width: 200px;
	max-height: 100%;
	box-sizing: border-box;
	position: relative;
}
.zlTransfer .shuttle-check {
	width: 14px;
	height: 14px;
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid #dcdfe6;
	border-radius: 2px;
	background: #fff;
	cursor: pointer;
	vertical-align: middle;
	position: relative;
	margin-right: 8px;
}
.zlTransfer .shuttle-check:hover {
	border-color: #0170fe;
}
.zlTransfer .shuttle-check.is-checked {
	background: #0170fe;
	border-color: #0170fe;
}
.zlTransfer .shuttle-check.is-checked:after {
	transform: rotate(45deg) scaleY(1);
	height: 6px;
	width: 3px;
	left: 4px;
	box-sizing: content-box;
	content: "";
	border: 1px solid #fff;
	border-left: 0;
	border-top: 0;
	height: 7px;
	left: 4px;
	position: absolute;
	top: 1px;
	width: 3px;
	transition: transform 0.15s ease-in 0.05s;
	transform-origin: center;
}
.zlTransfer .shuttle-check.is-havecheck {
	background: #0170fe;
	border-color: #0170fe;
}
.zlTransfer .shuttle-check.is-havecheck:after {
	content: "";
	height: 1px;
	width: 6px;
	left: 4px;
	display: block;
	background: #fff;
	margin-left: 3px;
	margin-top: 5px;
}
.zlTransfer .shuttle-title {
	cursor: pointer;
	font-size: 16px;
	height: 40px;
	line-height: 40px;
	background: #f5f7fa;
	margin: 0;
	padding-left: 15px;
	border-bottom: 1px solid #ebeef5;
	box-sizing: border-box;
	color: #000;
}
.zlTransfer .shuttle-title .shuttle-title-text {
	vertical-align: middle;
}
.zlTransfer .shuttle-title .shuttle-title-num {
	font-size: 12px;
	color: #888;
	float: right;
	margin-right: 15px;
}
.zlTransfer .shuttle-body {
	height: 246px;
	width: 100%;
	overflow-y: auto;
}
.zlTransfer .shuttle-body li {
	cursor: pointer;
	list-style: none;
	height: 30px;
	line-height: 30px;
	padding-left: 15px;
	display: block;
}
.zlTransfer .shuttle-body li span {
	vertical-align: middle;
}
.zlTransfer .shuttle-body li:hover {
	color: #0170fe;
}
.item_middle {
	display: inline-block;
	vertical-align: middle;
	padding: 0 30px;
}
</style>
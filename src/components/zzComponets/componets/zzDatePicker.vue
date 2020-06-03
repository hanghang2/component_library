<template>
	<div class="zl-DatePicker" ref="input">
		<div class="zlInput">
			<input
				type="text"
				autocomplete="off"
				class="zl-input__inner"
				readonly
				:placeholder="placeholder"
				v-model="inputVal"
				v-bind:class="{isfocus:isFocus}"
				@click="isFocus = !isFocus"
			/>
			<span class="zl-DatePicker_icon">
				<i class="el-icon-date"></i>
			</span>
			<span @click="clear" class="zl-input_isclearable">
				<i class="el-icon-circle-close zl-input__clear"></i>
			</span>
		</div>

		<div class="zl-calendar" v-show="isFocus">
			<div class="calendar-head">
				<button v-show="datatype != 2" class="pLeftMonth" @click="prevYear()">
					<i class="el-icon-d-arrow-left"></i>
				</button>
				<button v-show="datatype === 0" class="pLeftYear" @click="prevMonth()">
					<i class="el-icon-arrow-left"></i>
				</button>
				<span v-show="datatype != 2" @click="selectyear()">{{year}} 年</span>
				<span v-show="datatype === 0" @click="selectMonth()">{{month}} 月</span>
				<button v-show="datatype != 2" class="prightYear" @click="nextYear()">
					<i class="el-icon-d-arrow-right"></i>
				</button>
				<button v-show="datatype === 0" class="prightMonth" @click="nextMonth()">
					<i class="el-icon-arrow-right"></i>
				</button>
				<!--年选择-->
				<button v-show="datatype === 2" class="pLeftMonth" @click="prevYearscope()">
					<i class="el-icon-d-arrow-left"></i>
				</button>
				<span v-show="datatype === 2">{{yearScope}}</span>
				<button v-show="datatype === 2" class="prightMonth" @click="nextYearscope()">
					<i class="el-icon-d-arrow-right"></i>
				</button>
			</div>
			<div class="calendar-item">
				<table cellspacing="0" cellpadding="0" class="zl-date-table">
					<tbody v-show="datatype === 0">
						<tr class="bottomBorder">
							<th>日</th>
							<th>一</th>
							<th>二</th>
							<th>三</th>
							<th>四</th>
							<th>五</th>
							<th>六</th>
						</tr>
						<tr v-for="(items,index1) in dayArr2" :key="index1" class="zl-date-table__row">
							<td
								v-for="(item,index2) in items"
								:key="index2"
								v-bind:class="{'active':theActive(item),'prev-month':item.type=='prevMonth','available':item.type=='available','next-month':item.type=='nextMonth','today':item.day==nowDay}"
							>
								<div @click="activeDay(item,index1,index2)">
									<span v-text="item.day"></span>
								</div>
							</td>
						</tr>
					</tbody>
					<tbody class="zl-month-table" v-show="datatype === 1">
						<tr>
							<td>
								<div @click="setMonth(1)">一月</div>
							</td>
							<td>
								<div @click="setMonth(2)">二月</div>
							</td>
							<td>
								<div @click="setMonth(3)">三月</div>
							</td>
							<td>
								<div @click="setMonth(4)">四月</div>
							</td>
						</tr>
						<tr>
							<td>
								<div @click="setMonth(5)">五月</div>
							</td>
							<td>
								<div @click="setMonth(6)">六月</div>
							</td>
							<td>
								<div @click="setMonth(7)">七月</div>
							</td>
							<td>
								<div @click="setMonth(8)">八月</div>
							</td>
						</tr>
						<tr>
							<td>
								<div @click="setMonth(9)">九月</div>
							</td>
							<td>
								<div @click="setMonth(10)">十月</div>
							</td>
							<td>
								<div @click="setMonth(11)">十一月</div>
							</td>
							<td>
								<div @click="setMonth(12)">十二月</div>
							</td>
						</tr>
					</tbody>
					<tbody class="zl-month-table" v-show="datatype === 2">
						<tr>
							<td>
								<div @click="setYear(yearScopeArr[0])">{{yearScopeArr[0]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[1])">{{yearScopeArr[1]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[2])">{{yearScopeArr[2]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[3])">{{yearScopeArr[3]}}</div>
							</td>
						</tr>
						<tr>
							<td>
								<div @click="setYear(yearScopeArr[4])">{{yearScopeArr[4]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[5])">{{yearScopeArr[5]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[6])">{{yearScopeArr[6]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[7])">{{yearScopeArr[7]}}</div>
							</td>
						</tr>
						<tr>
							<td>
								<div @click="setYear(yearScopeArr[8])">{{yearScopeArr[8]}}</div>
							</td>
							<td>
								<div @click="setYear(yearScopeArr[9])">{{yearScopeArr[9]}}</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['value','placeholder'],
	data() {
		return {
			inputVal: "",
			isFocus: false,
			//选择天 年 月(0,1,2)
			datatype: 0,
			/*************年**************/

			/*************月**************/

			/*************天**************/
			//视图使用
			active: null,
			month: new Date().getMonth() + 1,
			year: new Date().getFullYear(),
			dayArr2: [[], [], [], [], [], []],
			//方法使用
			nowDay: new Date().getDate(),
			nowMonth: new Date().getMonth() + 1,
			nowYear: new Date().getFullYear(),
			activeDays: "",
			activeMonth: "",
			activeYear: "",
			dayArr: [],
			maxday: null,
			yearScope: "",
			yearScopeArr: [],
			scale: 0
		};
	},
	methods: {
		clear() {
			this.inputVal = "";
			this.$emit("update:value", this.inputVal);
			this.isFocus = false;
			this.active = null;
		},
		changes() {
			this.isFocus = !this.isFocus;
		},
		activeDay(item, i, j) {
			console.log(i,j)
			if (item.type == "prevMonth") {
				this.prevMonth();
			}
			if (item.type == "nextMonth") {
				this.nextMonth();
			}
			this.activeYear = this.year;
			this.activeMonth = this.month;
			this.activeDays = item.day;
			this.active = this.activeYear + "-" + this.activeMonth + "-" + this.activeDays;
			this.inputVal = this.activeYear + "-" + this.activeMonth + "-" + this.activeDays;
			this.changes();
		},
		setMonth(month) {
			this.datatype = 0;
			this.month = month;
			this.init();
		},
		selectMonth() {
			this.datatype = 1;
		},
		selectyear() {
			this.datatype = 2;
		},
		theActive(item) {
			if (this.active == this.year + "-" + this.month + "-" + item.day) {
				return true;
			}
			return false;
		},
		nextYear() {
			this.year++;
			this.init();
		},
		nextMonth() {
			if (this.month == 12) {
				this.year++;
				this.month = 1;
			} else {
				this.month++;
			}
			this.init();
		},
		prevYear() {
			this.year--;
			this.init();
		},
		prevMonth() {
			if (this.month == 1) {
				this.year--;
				this.month = 12;
			} else {
				this.month--;
			}
			this.init();
		},
		setYear(year) {
			this.year = year;
			this.datatype = 1;
		},
		nextYearscope() {
			this.scale++;
			this.yearScopeInit();
		},
		prevYearscope() {
			this.scale--;
			this.yearScopeInit();
		},
		getDaysInMonth(year, month) {
			//parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
			month = parseInt(month, 10);
			var temp = new Date(year, month, 0);
			return temp.getDate();
		},
		getweek(year, month, day) {
			return new Date(year + "-" + month + "-" + day).getDay();
		},
		init() {
			//当天日期
			if (this.nowMonth == this.month && this.nowYear == this.year) {
				this.nowDay = new Date().getDate();
			} else {
				this.nowDay = null;
			}
			this.dayArr = [];
			this.dayArr2 = [[], [], [], [], [], []];
			this.maxday = this.getDaysInMonth(this.year, this.month);
			//{type:'prevMonth',day:31},{type:'available',day:1},{type:'nextMonth',day:1}
			let minWeek = this.getweek(this.year, this.month, 1);
			let maxWeek = this.getweek(this.year, this.month, this.maxday);
			let prevday = this.getDaysInMonth(this.year, this.month - 1);
			//prev天数
			minWeek = minWeek == 0 ? 6 : minWeek - 1;
			for (var i = 0; i < minWeek + 1; i++) {
				this.dayArr.unshift({
					type: "prevMonth",
					day: prevday - i
				});
			}
			//this month天数
			for (var a = 1; a < this.maxday + 1; a++) {
				this.dayArr.push({
					type: "available",
					day: a
				});
			}
			//next天数
			maxWeek = 42 - this.dayArr.length;
			for (var b = 1; b < maxWeek + 1; b++) {
				this.dayArr.push({
					type: "nextMonth",
					day: b
				});
			}
			for (var c = 0; c < 6; c++) {
				for (var j = 0; j < 7; j++) {
					this.dayArr2[c].push(this.dayArr[c * 7 + j]);
				}
			}
		},
		yearScopeInit() {
			this.yearScope =
				parseInt(this.nowYear / 10 + this.scale) * 10 +
				" 年 - " +
				(parseInt(this.nowYear / 10 + this.scale) * 10 + 9) +
				" 年";
			for (var i = 0; i < 10; i++) {
				this.yearScopeArr[i] =
					parseInt(this.nowYear / 10 + this.scale) * 10 + i;
			}
		}
	},
	watch: {
		inputVal(newVal) {
			this.$emit("update:value", newVal);
		},
		value() {
			if (this.inputVal !== this.value) this.inputVal = this.value;
		}
	},
	created() {
		this.inputVal = this.value;
		this.yearScopeInit();
		this.init();
	},
	mounted() {
		let _this = this;
		document.addEventListener("click", function(e) {
			try {
				if (!!_this.$refs.input.contains(e.target)) return;
				_this.isFocus = false;
			} catch (e) {}
		});
	}
};
</script>

<style lang="scss" scoped>
.zl-DatePicker {
	.zlInput {
		width: 240px;
		position: relative;
		.zl-input__inner {
			background-color: #fff;
			background-image: none;
			border-radius: 4px;
			border: 1px solid #dcdfe6;
			box-sizing: border-box;
			color: #606266;
			display: inline-block;
			font-size: inherit;
			height: 40px;
			line-height: 40px;
			outline: none;
			padding: 0 15px;
			transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
			width: 100%;
			padding-left: 30px;
			cursor: pointer;
			&:hover {
				border: 1px solid #c0c4cc;
			}
			&.isfocus {
				border-color: #409eff !important;
			}
		}
		input:disabled {
			background-color: #f5f7fa;
			border-color: #e4e7ed;
			color: #c0c4cc;
			cursor: not-allowed;
			&:hover {
				border: 1px solid #e4e7ed;
			}
		}
		.zl-input_isclearable {
			position: absolute;
			width: 25px;
			height: 100%;
			right: 5px;
			top: 0;
			text-align: center;
			color: #c0c4cc;
			transition: all 0.3s;
			z-index: 111;
		}
		.zl-input__clear {
			color: #c0c4cc;
			font-size: 14px;
			cursor: pointer;
			transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
			width: 25px;
			line-height: 40px;
		}
		.zl-DatePicker_icon {
			position: absolute;
			left: 5px;
			width: 25px;
			height: 100%;
			top: 0;
			text-align: center;
			color: #c0c4cc;
			transition: all 0.3s;
			i {
				color: #c0c4cc;
				font-size: 14px;
				cursor: pointer;
				transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
				width: 25px;
				line-height: 40px;
			}
		}
	}
	.zl-calendar {
		width: 324px;
		height: 344px;
		color: #606266;
		border: 1px solid #ccc;
		box-shadow: 2px 2px 10px 1px #eaeaea;
		background: #fff;
		border-radius: 4px;
		line-height: 30px;
		margin-top: 12px;
		position: absolute;
		z-index: 111;
		&::before {
			content: "";
			border-left: 1px solid #ccc;
			border-top: 1px solid #ccc;
			background: #fff;
			width: 12px;
			height: 12px;
			display: block;
			transform-origin: 50% 50%;
			transform: rotate(45deg);
			margin: -7px 20% 0;
		}
		.calendar-head {
			height: 54px;
			padding: 12px;
			text-align: center;
			font-size: 16px;
			box-sizing: border-box;
		}
		.calendar-head button {
			border: none;
			background: none;
			padding: 0px 6px;
			outline: none;
			cursor: pointer;
			height: 30px;
		}
		.calendar-head span {
			cursor: pointer;
		}
		.calendar-head button:hover,
		.calendar-head span:hover {
			color: #409eff;
		}
		.prightYear,
		.prightMonth {
			float: right;
		}
		.pLeftMonth,
		.pLeftYear {
			float: left;
		}
		.calendar-item {
			height: 287px;
			padding: 15px;
			box-sizing: border-box;
		}
		.zl-date-table {
			width: 100%;
			text-align: center;
			height: 100%;
		}
		.today {
			color: #409eff;
			font-weight: bold;
		}
		.prev-month,
		.next-month {
			cursor: pointer;
			color: #c0c4cc;
		}
		.available {
			cursor: pointer;
		}
		.available.active span {
			color: #fff;
			background-color: #409eff;
			border-radius: 50%;
			display: block;
			width: 30px;
			margin: 0px auto;
		}
		.zl-date-table__row td > div {
			width: 41px;
		}
		.bottomBorder th {
			border-bottom: 1px solid #ebeef5;
		}
		.zl-month-table td > div {
			cursor: pointer;
		}
		.zl-month-table td > div:hover {
			color: #409eff;
		}
	}
}
</style>
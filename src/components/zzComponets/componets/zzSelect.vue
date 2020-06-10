<template>
	<div class="zl-select" @click="changes" ref="select">
		<input v-model="value" type="text" readonly="readonly" autocomplete="off"
				:name="name"
				:placeholder="placeholder"
				class="zl-select-input"
				v-bind:class="{isfocus:isFocus,isdisabled:isdisabled}"
		/>
		<span v-show="!isFocus" class="zl-select_icon">
            <img class="zl-input__clear" src="@/assets/jiantouDown.png"/>
        </span>
		<span v-show="isFocus" class="zl-select_icon">
            <img class="zl-input__clear" src="@/assets/jiantouUp.png"/>
        </span>
		<!--<span v-show="clearable !== false" @click="clear" class="zl-input_isclearable">-->
            <!--<img class="zl-input__clear" src="@/assets/clearable.png"/>-->
        <!--</span>-->
		<div class="lis" v-show="isFocus">
			<li
					v-for="(data,index) in selectData"
					:key="index"
					v-bind:class="{activeLi:activeIndex == index,activeLi2:value == data.name}"
					@click="valueXZ(data.name,data.value)"
					@mouseover="showActive(index)"
					v-text="data.name"
			></li>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		selectData: {
			default: function() {
				return false;
			},
			type: Array
		},
		val:{
			default: function() {
				return false;
			},
			type: String
		},
		placeholder: {
			default: "请选择"
		},
		disabled: {
			default: false
		},
		name: {
			default: ''
		},
	},
	data() {
		return {
			isFocus: false,
			isdisabled: false,
			activeIndex: null,
			value:""
		};
	},
	methods: {
		changes() {
			if (this.disabled == undefined) {
				this.isFocus = !this.isFocus;
			} else {
				if (this.disabled !== false) {
					this.isFocus = false;
				} else {
					this.isFocus = !this.isFocus;
				}
			}
			// this.isFocus = !this.isFocus;
		},
		valueXZ(name, value) {
			this.$emit("getVal", value);
			this.value = name;
		},
		showActive(index) {
			this.activeIndex = index;
		},
		documentClick(e){//文档点击事件
			try {
				if (this.$refs.select.contains(e.target)) return;
				this.isFocus = false;
			} catch (e) {
				console.log(e)
			}
		}
	},
	mounted() {
		document.addEventListener("click", this.documentClick); //添加 文档点击事件
		if(this.disabled || (this.disabled === '')) this.isdisabled = true;
	},
	created() {
		for (var i = 0; i < this.selectData.length; i++) {
			if (this.selectData[i].value === this.val) {
				this.value = this.selectData[i].name;
				break;
			}
		}
	},
	beforeDestroy(){
		document.removeEventListener("click", this.documentClick); //移出 文档点击事件
	}

};
</script>
<style scoped>
.zl-select {
	position: relative;
	width: auto;
	display: inline-block;
}

.zl-select-input {
	width: 240px;
	cursor: pointer;
	-webkit-appearance: none;
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
}

input::-webkit-input-placeholder{
  color:#ccc;
}
.zl-select-input:hover {
	border-color: #c0c4cc;
}

.isfocus {
	border-color: #0170fe !important;
}

.isdisabled {
	background-color: #f5f7fa;
	border-color: #e4e7ed;
	color: #c0c4cc;
	cursor: not-allowed;
}

.isdisabled:hover {
	border: 1px solid #e4e7ed;
}

.lis {
	position: absolute;
	background-color: white;
	color: #606266;
	list-style: none;
	padding: 6px 0;
	margin: 0;
	box-sizing: border-box;
	border: 1px solid #e4e7ed;
	min-width: 240px;
	top: 50px;
	left: 0px;
	border-radius: 5px;
	box-shadow: 2px 2px 10px 1px #eaeaea;
	z-index: 111;
	transition: all 0.3s;
}

.lis::before {
	content: "";
	border-left: 1px solid #e4e7ed;
	border-top: 1px solid #e4e7ed;
	background: #fff;
	width: 8px;
	height: 8px;
	display: block;
	transform-origin: 50% 50%;
	transform: rotate(45deg);
	margin: -11px 0 0 36px;
}

.lis li {
	font-size: 14px;
	padding: 0 20px;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #606266;
	height: 34px;
	line-height: 34px;
	box-sizing: border-box;
	cursor: pointer;
	text-align: left;
}

.lis li:hover {
	background-color: #f5f7fa;
}

.lis .activeLi {
	background-color: #f5f7fa;
}
.lis .activeLi2{
	color: #409eff;
	font-weight: 700;
}

.zl-select_icon {
	position: absolute;
	right: 0;
	width: 25px;
	height: 100%;
	right: 5px;
	top: 0;
	text-align: center;
	color: #c0c4cc;
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
}

.zl-select_iconitem {
	color: #c0c4cc;
	font-size: 14px;
	cursor: pointer;
	transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 25px;
	line-height: 40px;
}
.zl-select .zl-input_isclearable {
	position: absolute;
	width: 25px;
	height: 100%;
	right: 5px;
	top: 0;
	text-align: center;
	color: #c0c4cc;
	transition: all 0.3s;
	z-index: 111;
	display: flex;
	justify-content: center;
	align-items: center;
}

.zl-select .zl-input__clear {
	cursor: pointer;
	transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 14px;
}
</style>

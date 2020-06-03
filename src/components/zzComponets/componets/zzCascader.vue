<template>
	<div class="zlCascader" ref="cascader">
		<input
			type="text"
			readonly="readonly"
			autocomplete="off"
			placeholder="请选择"
			class="zl-Cascader-inner"
			v-model="inputValue"
			@click="changes"
			v-bind:class="{isfocus:isFocus}"
		/>
		<span v-show="!isFocus" class="zl-cascader_icon">
            <img class="zl-input__clear" src="@/assets/jiantouDown.png"/>
		</span>
		<span v-show="isFocus" class="zl-cascader_icon">
            <img class="zl-input__clear" src="@/assets/jiantouUp.png"/>
		</span>
		<div class="cascader_list" v-show="isFocus">
			<li
				v-for="(item,index) in cascaderData"
				:key="index"
				v-bind:class="{activeLi:FirstactiveIndex == index}"
				@click="FirstClick(index,item.name,item.value,item.children)"
			>{{item.name}}
				<span v-show="item.children" class="zl-cascader_icon">
            		<img class="zl-input__clear" src="@/assets/jiantouLeft.png"/>
				</span>
			</li>
		</div>
		<div class="listSun" v-show="isShowSun">
			<li v-for="(item,index) in cascaderListSun" :key="index"
				v-bind:class="{activeLi:SecondactiveIndex == index}"
				@click="SecondClick(index,item.name,item.value,item.children)"
			>
				{{item.name}}
				<span v-show="item.children" class="zl-cascader_icon">
           			<img class="zl-input__clear" src="@/assets/jiantouLeft.png"/>
				</span>
			</li>
		</div>
		<div class="listLast" v-show="isShowLast">
			<li v-for="(item,index) in cascaderListSunLast" :key="index"  @click="LastClick(index,item.name,item.value)">
				{{item.name}}
			</li>
		</div>
	</div>
</template>
<script>
export default {
	props: ["cascaderData"],
	data() {
		return {
			inputValue: "",
			isFocus: false,
			isShowSun: false,
			isShowLast: false,
			cascaderListSun: [],
			cascaderListSunLast: [],
			FirstactiveIndex: null,
			SecondactiveIndex: null,
			FirstValue: "",
			SecondValue: ""
 		};
	},
	methods: {
		changes() {
			this.isFocus = !this.isFocus;
		},
		FirstClick(index, name, value, children) {
			this.FirstactiveIndex = index;
 			this.FirstValue = value;
			this.SecondactiveIndex = null;
			this.isShowLast = false;
			if (children) {
				this.cascaderListSun = children;
				this.isShowSun = true;
   			} else {
				this.inputValue = value;
				this.$emit("getVal", this.inputValue);
				this.isShowSun = false;
				this.isFocus = false;
			}
		},
		SecondClick(index, name, value, children) {
			this.SecondactiveIndex = index;
			if (children) {
				this.cascaderListSunLast = children;
				this.isShowLast = true;
				this.SecondValue = this.FirstValue + " / " + value;
			} else {
				this.inputValue = this.FirstValue + " / " + value;
				this.isShowLast = false;
				this.isShowSun = false;
				this.isFocus = false;
				this.$emit("getVal", this.inputValue);
			}
		},
		LastClick(index, name, value) {
			this.inputValue = this.SecondValue + " / " + value;
   			this.isShowLast = false;
			this.isShowSun = false;
			this.isFocus = false;
			this.$emit("getVal", this.inputValue);
 		}
	},
	mounted() {
		let _this = this;
		document.addEventListener("click", function(e) {
			try {
				if (!!_this.$refs.cascader.contains(e.target)) return;
				_this.isFocus = false;
 				_this.isShowLast = false;
 				_this.isShowSun = false;
			} catch (e) {}
		});
	},
	created: function() {
		for (var i = 0; i < this.cascaderData.length; i++) {
 			if (this.cascaderData[i].value === this.inputValue) {
				this.inputValue = this.cascaderData[i].name;
				break;
			}
		}
	}
};
</script>
<style scoped>
.zlCascader {
    position: relative;
    width: auto;
    display: inline-block;
}
.zlCascader .zl-Cascader-inner {
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
    width: 240px;
    cursor: pointer;
}
.zlCascader .zl-Cascader-inner:hover {
    border: 1px solid #c0c4cc;
}
.zlCascader .zl-Cascader-inner.isfocus {
    border-color: #409eff !important;
}
.zlCascader .zl-cascader_icon {
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
.zlCascader .zl-cascader_icon .zl-cascader_iconitem {
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 25px;
    line-height: 40px;
}
.zlCascader .cascader_list {
    position: absolute;
    background-color: white;
    color: #606266;
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #e4e7ed;
    min-width: 200px;
    border: 1px solid #ccc;
    top: 50px;
    left: 0px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 1px #eaeaea;
    z-index: 111;
    height: 200px;
    overflow-y: auto;
}
.zlCascader .cascader_list::before {
    content: "";
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    background: #fff;
    width: 12px;
    height: 12px;
    display: block;
    transform-origin: 50% 50%;
    transform: rotate(45deg);
    margin: -12px auto 0;
}
.zlCascader .cascader_list li {
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
.zlCascader .cascader_list li:hover {
    background-color: #f5f7fa;
}
.zlCascader .cascader_list .activeLi {
    background-color: #f5f7fa;
    color: #409eff;
}
.zlCascader .cascader_list .zl-cascader_iconitem {
    line-height: 34px;
}
.zlCascader .listSun {
    position: absolute;
    background-color: white;
    color: #606266;
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #e4e7ed;
    min-width: 200px;
    border: 1px solid #ccc;
    top: 50px;
    left: 199px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 1px #eaeaea;
    z-index: 111;
    transition: all 0.3s;
    height: 200px;
    overflow-y: auto;
}
.zlCascader .listSun li {
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
.zlCascader .listSun li:hover {
    background-color: #f5f7fa;
}
.zlCascader .listSun .activeLi {
    background-color: #f5f7fa;
    color: #409eff;
}
.zlCascader .listLast {
    position: absolute;
    background-color: white;
    color: #606266;
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #e4e7ed;
    min-width: 200px;
    border: 1px solid #ccc;
    top: 50px;
    left: 398px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 1px #eaeaea;
    z-index: 111;
    transition: all 0.3s;
    height: 200px;
    overflow-y: auto;
}
.zlCascader .listLast li {
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
.zlCascader .listLast li:hover {
    background-color: #f5f7fa;
}
.zlCascader .listLast .activeLi {
    background-color: #f5f7fa;
    color: #409eff;
}
.zl-input__clear {
	cursor: pointer;
	transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 14px;
}
</style>
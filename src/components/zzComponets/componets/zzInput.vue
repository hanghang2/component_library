<template>
	<div class="zlInput" @click="changes" ref="input">
		<textarea v-if="type=='textarea'" autocomplete="off" class="zl-textarea__inner"
			v-bind:class="{isfocus:isFocus}"
			:placeholder="placeholder"
			:rows="rows"
			:maxlength="maxlength"
			:minlength="minlength"
		></textarea>
		<input :type="type" v-else autocomplete="off" class="zl-input__inner"
			v-bind:class="{isfocus:isFocus}" v-model="inputVal"
			:placeholder="placeholder"
			:disabled="disabled !== false"
			:maxlength="maxlength"
			:minlength="minlength"
		/>
		<span v-show="clearable !== false" @click="clear" class="zl-input_isclearable">
			<img class="zl-input__clear" src="@/assets/clearable.png" />
		</span>
		<span class="limit_num" v-show="showWordLimit !== false && maxlength ">0/{{maxlength}}</span>
	</div>
</template>
<script>
export default {
	props: {
		value: {
			//绑定的父组件的值
			default: function() {
				return false;
			},
			type: String
		},
		placeholder: {
			default: function() {
				return false;
			},
			type: String
		},
		clearable: {
			default: false
		},
		disabled: {
			default: false
		},
		type: {
			default: false
		},
		rows: {
			default: false
		},
		maxlength: {
			default: false
		},
		minlength: {
			default: false
		},
		showWordLimit: {
			default: false
		}
	},
	data() {
		return {
			inputVal: "",
			isFocus: false
		};
	},
	methods: {
		clear() {
			this.inputVal = "";
			this.$emit("update:value", this.inputVal);
		},
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
		},
		documentClick(e) {
			//文档点击事件
			try {
				if (this.$refs.input.contains(e.target)) return;
				this.isFocus = false;
			} catch (e) {
				console.log(e);
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
		console.log(this.showWordLimit)
	},
	mounted() {
		document.addEventListener("click", this.documentClick); //添加 文档点击事件
	},
	beforeDestroy() {
		document.removeEventListener("click", this.documentClick); //移出 文档点击事件
	}
};
</script>
<style scoped >
.zlInput {
	width: 240px;
	position: relative;
}

.zlInput .zl-input__inner {
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
	cursor: pointer;
}
.zlInput .zl-input__inner:hover {
	border: 1px solid #c0c4cc;
}

.zlInput .zl-input__inner.isfocus {
	border-color: #0170fe !important;
}

.zlInput input:disabled {
	background-color: #f5f7fa;
	border-color: #e4e7ed;
	color: #c0c4cc;
	cursor: not-allowed;
}
.zlInput input:disabled:hover {
	border: 1px solid #e4e7ed;
}
.zlInput .zl-input_isclearable {
	position: absolute;
	right: 0;
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

.zlInput .zl-input__clear {
	cursor: pointer;
	transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 14px;
}

.zlInput .zl-textarea__inner {
	display: block;
	resize: vertical;
	padding: 5px 15px;
	line-height: 1.5;
	box-sizing: border-box;
	width: 100%;
	font-size: inherit;
	color: #606266;
	background-color: #fff;
	background-image: none;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	min-height: 33px;
	font-family: auto;
}
.zl-textarea__inner:hover {
	border: 1px solid #c0c4cc;
}
.zl-textarea__inner.isfocus {
	border-color: #0170fe !important;
}
.limit_num {
	position: absolute;
    right: 12px;
    bottom: 3px;
    font-size: 12px;
    color: #909399;
}
</style>

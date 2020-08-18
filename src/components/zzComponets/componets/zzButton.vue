<template>
	<button type="button" :class="'zlButton ' + buttonType
        + isplain
        + isround
        + getDisabled()">
		<slot></slot>
	</button>
</template>
<script>
export default {
	props: ["type", "plain", "round", "disabled"],
	name: "zlButton",
	data() {
		return {
			buttonType: "",
			isplain: "",
			isround: "",
			iscircle: "",
			isdisabled: ""
		};
	},
	methods: {
		getDisabled() {
			if (this.disabled === "" || this.disabled) {
				this.isdisabled = "zlButton-isdisabled ";
			} else {
				this.isdisabled = " ";
			}
			return this.isdisabled;
		}
	},
	mounted() {
		if (!this.type) {
			this.buttonType = " ";
		} else {
			this.buttonType = "zlButton-" + this.type + " ";
		}
		if (this.plain == "") {
			this.isplain = "zlButton-isplain ";
		} else {
			this.isplain = " ";
		}
		if (this.round == "") {
			this.isround = "zlButton-isround ";
		} else {
			this.isround = " ";
		}
	}
};
</script>
<style scoped>
.zlButton {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	padding: 12px 20px;
	margin: 0 5px;
}

.zlButton:hover {
	color: #0170fe;
	border-color: #c6e2ff;
	background-color: #ecf5ff;
}
.zlButton:active {
	border-color: #0170fe;
}

.zlButton.zlButton-isround {
	border-radius: 20px;
}
.zlButton.zlButton-isdisabled {
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5;
}
.zlButton.zlButton-isdisabled:hover {
	opacity: 1;
}

.zlButton-primary {
	color: #fff;
	background-color: #0170fe;
	border-color: #0170fe;
}

.zlButton-primary:hover {
	color: #fff;
	background-color: #0170fe;
	border-color: #0170fe;
	opacity: 0.8;
}
.zlButton-primary:active {
	background: #3a8ee6;
	border-color: #3a8ee6;
}

.zlButton-primary.zlButton-isplain {
	color: #0170fe;
	background: #ecf5ff;
	border-color: #b3d8ff;
}
.zlButton-primary.zlButton-isplain:active {
	border-color: #0170fe;
}
.zlButton-primary.zlButton-isdisabled {
	color: #fff;
	background-color: #a0cfff;
	border-color: #a0cfff;
}
.zlButton-primary.zlButton-isplain.zlButton-isdisabled {
	color: #8cc5ff;
	background-color: #ecf5ff;
	border-color: #d9ecff;
}

.zlButton-success {
	color: #fff;
	background-color: #67c23a;
	border-color: #67c23a;
}

.zlButton-success:hover {
	color: #fff;
	background-color: #67c23a;
	border-color: #67c23a;
	opacity: 0.8;
}

.zlButton-success:active {
	background: #5daf34;
	border-color: #5daf34;
}
.zlButton-success.zlButton-isplain {
	color: #67c23a;
	background: #f0f9eb;
	border-color: #c2e7b0;
}
.zlButton-success.zlButton-isplain:active {
	border-color: #67c23a;
}
.zlButton-success.zlButton-isdisabled {
	color: #fff;
	background-color: #b3e19d;
	border-color: #b3e19d;
}
.zlButton-success.zlButton-isplain.zlButton-isdisabled {
	color: #a4da89;
	background-color: #f0f9eb;
	border-color: #e1f3d8;
}

.zlButton-info {
	color: #fff;
	background-color: #909399;
	border-color: #909399;
}

.zlButton-info:hover {
	color: #fff;
	background-color: #909399;
	border-color: #909399;
	opacity: 0.8;
}
.zlButton-info:active {
	background: #82848a;
	border-color: #82848a;
}

.zlButton-info.zlButton-isplain {
	color: #909399;
	background: #f4f4f5;
	border-color: #d3d4d6;
}
.zlButton-info.zlButton-isplain:active {
	border-color: #909399;
}
.zlButton-info.zlButton-isdisabled {
	color: #fff;
	background-color: #c8c9cc;
	border-color: #c8c9cc;
}
.zlButton-info.zlButton-isplain.zlButton-isdisabled {
	color: #bcbec2;
	background-color: #f4f4f5;
	border-color: #e9e9eb;
}

.zlButton-warning {
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c;
}

.zlButton-warning:hover {
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c;
	opacity: 0.8;
}

.zlButton-warning:active {
	background: #cf9236;
	border-color: #cf9236;
}
.zlButton-warning.zlButton-isplain {
	color: #e6a23c;
	background: #fdf6ec;
	border-color: #f5dab1;
}
.zlButton-warning.zlButton-isplain:active {
	border-color: #e6a23c;
}
.zlButton-warning.zlButton-isplain.zlButton-isdisabled {
	color: #f0c78a;
	background-color: #fdf6ec;
	border-color: #faecd8;
}
.zlButton-warning.zlButton-isdisabled {
	color: #fff;
	background-color: #f3d19e;
	border-color: #f3d19e;
}

.zlButton-danger {
	color: #fff;
	background-color: #f56c6c;
	border-color: #f56c6c;
}

.zlButton-danger:hover {
	color: #fff;
	background-color: #f56c6c;
	border-color: #f56c6c;
	opacity: 0.8;
}
.zlButton-danger:active {
	background: #dd6161;
	border-color: #dd6161;
}

.zlButton-danger.zlButton-isplain {
	color: #f56c6c;
	background: #fef0f0;
	border-color: #fbc4c4;
}
.zlButton-danger.zlButton-isplain:active {
	border-color: #f56c6c;
}
.zlButton-danger.zlButton-isplain.zlButton-isdisabled {
	color: #f9a7a7;
	background-color: #fef0f0;
	border-color: #fde2e2;
}
.zlButton-danger.zlButton-isdisabled {
	color: #fff;
	background-color: #fab6b6;
	border-color: #fab6b6;
}
</style>

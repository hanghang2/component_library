<template>
	<button type="button"
	        :class="'zlButton ' + buttonType
        + isplain
        + isround
        ">
		<slot></slot>
	</button>
</template>
<script>
export default {
	props: ["type", "plain", "round"],
	name: "zlButton",
	data() {
		return {
			buttonType: "",
			isplain: "",
			isround: "",
			iscircle: ""
		};
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

.zlButton.zlButton-isround {
	border-radius: 20px;
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
	opacity: .8;
}

.zlButton-primary.zlButton-isplain {
	color: #0170fe;
	background: #ecf5ff;
	border-color: #b3d8ff;
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
	opacity: .8;
}

.zlButton-success.zlButton-isplain {
	color: #67c23a;
	background: #f0f9eb;
	border-color: #c2e7b0;
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
	opacity: .8;
}

.zlButton-info.zlButton-isplain {
	color: #909399;
	background: #f4f4f5;
	border-color: #d3d4d6;
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
	opacity: .8;
}

.zlButton-warning.zlButton-isplain {
	color: #e6a23c;
	background: #fdf6ec;
	border-color: #f5dab1;
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
	opacity: .8;
}

.zlButton-danger.zlButton-isplain {
	color: #f56c6c;
	background: #fef0f0;
	border-color: #fbc4c4;
}
</style>

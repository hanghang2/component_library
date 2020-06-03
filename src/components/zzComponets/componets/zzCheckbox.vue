<template>
	<div class="zzCheckbox" @click="change" :class="getDisable()">
		<span class="zzCheckbox-value" :class="{isValue: value,noConfirm:indeterminate && indeterminate2}"></span>
		<span class="zzCheckbox-content" :class="{isValue: value,noConfirm:indeterminate && indeterminate2}"><slot></slot></span>
	</div>
</template>
<script>

export default {
	name: "zzCheckbox",
	props: {
		value: {
			type: Boolean,
			default: false
		},
		disabled: {},
		indeterminate:{
			type: Boolean,
			default: false
		}
	},
	data(){
		return {
			indeterminate2:false
		}
	},
	watch:{
		indeterminate(newVal){
			if(newVal) this.indeterminate2 = true;
		}
	},
	methods: {
		change() {
			if (this.getDisable()) return;
			if(this.indeterminate2) this.indeterminate2 = false;
			this.$emit('change', !this.value)
			this.$emit("input", !this.value);
		},
		getDisable() {
			if (this.disabled === false) return "";
			return typeof this.disabled == "undefined" ? "" : "disabled";
		}
	},
	created() {
		this.indeterminate2 = this.indeterminate;
	}

};
</script>
<style lang="css" scoped>
.zzCheckbox {
	display: inline-block;
	width: auto;
	cursor: pointer;
}

.zzCheckbox-value {
	display: inline-block;
	vertical-align: middle;
	border: 1px solid #dcdfe6;
	border-radius: 2px;
	box-sizing: border-box;
	width: 14px;
	height: 14px;
	background-color: #fff;
	position: relative;
}

.zzCheckbox-value.isValue {
	background-color: #409eff;
	border-color: #409eff;
}

.zzCheckbox-value.isValue:before {
	content: '';
	display: block;
	width: 3px;
	height: 7px;
	border-right: 1px solid #ffffff;
	border-bottom: 1px solid #ffffff;
	position: absolute;
	transform-origin: center center;
	transform: rotate(45deg);
	left: 4px;
	top: 0px;
}

.zzCheckbox-content {
	display: inline-block;
	vertical-align: middle;
	font-size: 14px;
	color: #333333;
	padding-left: 10px;
}

.zzCheckbox-content.isValue {
	color: #409eff;
}

/*zzCheckbox disabled*/
.zzCheckbox.disabled {
	cursor: no-drop;
}

.zzCheckbox.disabled .zzCheckbox-value {
	background-color: #edf2fc !important;
	border-color: #dcdfe6 !important;
}

.zzCheckbox.disabled .zzCheckbox-value.isValue:before {
	border-color: #c0c4cc !important;
}

.zzCheckbox.disabled .zzCheckbox-content.isValue {
	color: #c0c4cc !important;
}

/*noConfirm 不确定*/
.zzCheckbox-value.noConfirm {
	background-color: #409eff;
	border-color: #409eff;
}

.zzCheckbox-value.noConfirm:before {
	content: '';
	display: block;
	width: 3px;
	height: 7px;
	border-right: 1px solid #ffffff;
	border-bottom: none;
	position: absolute;
	transform-origin: center center;
	transform: rotate(90deg);
	left: 4px;
	top: 0px;
}

.zzCheckbox-content.noConfirm {
	color: #409eff;
}
</style>

<template>
	<div class="zl-Slider">
		<div style="position: relative;border-radius:10px">
			<input
				id="zl-Slider_input"
				type="range"
				@input="barChange"
				min="0"
				max="100"
				defaultValue="0"
				v-model="barValue"
				:disabled="disabled !== false"
			/>
			<div :id="id" class="div1" :class="{disabled :disabled !== false}"></div>
			<!-- 此元素用于解决滑动条滑动后点击彩色位置没有反应的问题 -->
			<input
				type="range"
				class="zl-Slider_input2"
				v-model="barValue"
				:class="{input_disabled :disabled !== false}"
				min="0"
				max="100"
				@input="input2Change"
				:disabled="disabled !== false"
			/>
		</div>
		<span class="textTooltip" v-show="showTooltip !== false" ref="textTooltip">{{textValue}}</span>
	</div>
</template>

<script >
export default {
	props: {
		// 此id值是为了实现组件在同页面复用
		id: {
			type: [String, Number],
			default: "id1"
		},
		value: {
			// 父组件传过来初始值
			type: [Number],
			default: 0
		},
		showTooltip: {
			default: true
		},
		disabled: {
			default: false
		}
	},
	data() {
		return {
			textValue: 0,
			barValue: 0,
			barInput: null,
			max: null
		};
	},
	mounted() {
		this.initSliderBar();
	},
	methods: {
		initSliderBar() {
			// 初始化滑动条进度
			this.barValue = this.value;
			this.textValue = this.value;
			this.barInput = document.querySelector("#zl-Slider_input");
			this.max = this.barInput.max;
			this.setTrack(this.value, this.max);
		},
		input2Change(e) {
			// 解决点击彩色位置滑动条没反应
			let value = e.target.value,
				// input的最大值
				max = e.target.max;
			this.textValue = value;
			this.setTrack(value, max);
		},
		barChange(e) {
			// 滑动条事件
			let value = e.target.value,
				// input的最大值
				max = e.target.max;
			this.textValue = value;
			this.setTrack(value, max);
		},
		setTrack(value, max) {
			// 设置滑块划过部分颜色
			let div1 = document.querySelector(`#${this.id}`);
			// input的实际宽度
			let width = this.barInput.offsetWidth;
			let number = max / width;
			// 填充色需要减去的像素可以进行微调,有时候会有几个像素的偏差
			let number2 = (value / width) * ((width / max) * 10) - 1;
			// 根据value的值动态改变div的宽度,达到滑动滑块填充颜色的效果
			div1.style.width = value / number - number2 + "px";

			this.$refs.textTooltip.style.left =
				value / number - number2 - 10 + "px";
		}
	}
};
</script>

<style scoped>
.zl-Slider {
	position: relative;
	width: 500px;
}
/* 滑动条样式 */
input[type="range"] {
	-webkit-appearance: none;
	width: 450px;
	border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
}
input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
}
/* 设置轨道样式 */
input[type="range"]::-webkit-slider-runnable-track {
	height: 6px;
	border-radius: 2px; /*将轨道设为圆角的*/
	box-shadow: 0 1px 1px #e4e7ed, inset 0 0.125em 0.125em #e4e7ed; /*轨道内置阴影效果*/
}
input[type="range"]:focus {
	outline: none;
}
/* 设置滑块样式 */
input[type="range"]::-webkit-slider-thumb {
	width: 18px;
	height: 18px;
	border: 2px solid #409eff;
	background-color: #fff;
	border-radius: 50%;
	transition: 0.2s;
	user-select: none;
	cursor: grab;
	z-index: 111;
	margin-top: -5px;
}
input[type="range"]:disabled::-webkit-slider-thumb {
	border: 2px solid #c0c4cc;
	cursor: not-allowed;
}
.div1 {
	height: 6px;
	border-radius: 30px;
	background: #409eff;
	position: absolute;
	top: 4px;
	left: 0;
}
.div1.disabled {
	background: #c0c4cc;
}
#zl-Slider_input {
	position: absolute;
	margin: 0;
	left: 0;
	top: 4px;
}
.zl-Slider_input2 {
	position: absolute;
	left: -2px;
	top: -2px;
	opacity: 0;
}
.textTooltip {
	width: 30px;
	height: 30px;
	line-height: 30px;
	background: #333;
	color: #fff;
	position: absolute;
	top: -40px;
	text-align: center;
	border-radius: 4px;
}
.textTooltip::after {
	content: "";
	width: 0;
	height: 0;
	border-width: 6px;
	border-style: solid;
	border-color: #333 transparent transparent transparent;
	position: absolute;
	bottom: -11px;
	left: 10px;
}
</style>
<template>
	<div class="zz-tooltip">
		<transition name="fade">
			<div class="tooltip" v-bind:class="{'bottomCenter':bottomCenter,'bottomRight':bottomRight,'bottomLeft':bottomLeft,'topCenter':topCenter,'topLeft':topLeft,'topRight':topRight,
            'leftTop':leftTop,'rightTop':rightTop,'leftCenter':leftCenter,'rightCenter':rightCenter,'leftBottom':leftBottom,'rightBottom':rightBottom,'is-light': effect == 'light'}" v-text="tooltipData.content" v-show="isshow">
			</div>
		</transition>
		<div class="zz-tooltip-content" @mouseenter="show()" @mouseleave="hide()">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ["tooltipData", "effect"],
	data() {
		return {
			isshow: false,
			bottomCenter: false,
			bottomRight: false,
			bottomLeft: false,
			topCenter: false,
			topLeft: false,
			topRight: false,
			leftTop: false,
			rightTop: false,
			leftCenter: false,
			rightCenter: false,
			leftBottom: false,
			rightBottom: false
		};
	},
	methods: {
		show() {
			this.isshow = true;
		},
		hide() {
			this.isshow = false;
		},
		theActive() {
			return false;
		}
	},
	mounted() {},
	created: function() {
		if (this.tooltipData.alignment == "bottomCenter") {
			this.bottomCenter = true;
		} else if (this.tooltipData.alignment == "bottomRight") {
			this.bottomRight = true;
		} else if (this.tooltipData.alignment == "bottomLeft") {
			this.bottomLeft = true;
		} else if (this.tooltipData.alignment == "topCenter") {
			this.topCenter = true;
		} else if (this.tooltipData.alignment == "topLeft") {
			this.topLeft = true;
		} else if (this.tooltipData.alignment == "topRight") {
			this.topRight = true;
		} else if (this.tooltipData.alignment == "leftTop") {
			this.leftTop = true;
		} else if (this.tooltipData.alignment == "rightTop") {
			this.rightTop = true;
		} else if (this.tooltipData.alignment == "leftCenter") {
			this.leftCenter = true;
		} else if (this.tooltipData.alignment == "rightCenter") {
			this.rightCenter = true;
		} else if (this.tooltipData.alignment == "leftBottom") {
			this.leftBottom = true;
		} else if (this.tooltipData.alignment == "rightBottom") {
			this.rightBottom = true;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zz-tooltip {
	display: inline-block;
	position: relative;
	width: auto;
}
.zz-tooltip-content {
	display: inline-block;
}
.tooltip {
	position: absolute;
	background: #000000;
	color: #fff;
	padding: 8px;
	max-width: 500px;
    border-radius: 4px;
    z-index: 11111;
	/* width: 200px; */
}
.tooltip::before {
	content: "";
	display: block;
	border: 6px solid #fff;
	border-top: 0px;
	border-bottom-color: #000;
	position: absolute;
}
.tooltip.is-light {
    background: #ffffff;
    color: #000000;   
    border: 1px solid #000000;
}
.tooltip.is-light::before {
	content: "";
	display: block;
	border: 6px solid #fff;
	border-top: 0px;
	border-bottom-color: #000;
	position: absolute;
}
/*bottomCenter*/
.bottomCenter {
	margin-top: 10px;
	top: 100%;
	left: calc(50% - 100px);
}
.bottomCenter::before {
	top: -6px;
	left: 97px;
}
/*bottomRight*/
.bottomRight {
	margin-top: 10px;
	top: 100%;
	/* left: calc(100% - 200px); */
}
.bottomRight::before {
	top: -6px;
	right: 20px;
}
/*bottomLeft*/
.bottomLeft {
	margin-top: 10px;
	top: 100%;
	left: 0px;
}
.bottomLeft::before {
	top: -6px;
	left: 20px;
}
/*topCenter*/
.topCenter {
	margin-bottom: 10px;
	bottom: 100%;
	left: calc(50% - 100px);
}
.topCenter::before {
	bottom: -6px;
	border: 6px solid #fff;
	border-bottom: 0px;
	border-top-color: #000;
	left: 97px;
}
/*topRight*/
.topRight {
	margin-bottom: 10px;
	bottom: 100%;
	/* left: calc(100% - 200px); */
}
.topRight::before {
	bottom: -6px;
	border: 6px solid #fff;
	border-bottom: 0px;
	border-top-color: #000;
	right: 20px;
}
/*topLeft*/
.topLeft {
	margin-bottom: 10px;
	bottom: 100%;
	left: 0px;
}
.topLeft::before {
	bottom: -6px;
	border: 6px solid #fff;
	border-bottom: 0px;
	border-top-color: #000;
	left: 20px;
}
/*leftTop*/
.leftTop {
	margin-bottom: 10px;
	bottom: 100%;
	right: 0px;
}
.leftTop::before {
	bottom: -6px;
	border: 6px solid #fff;
	border-bottom: 0px;
	border-top-color: #000;
	left: 20px;
}
/*rightTop*/
.rightTop {
	margin-bottom: 10px;
	bottom: 100%;
	right: 0px;
}
.rightTop::before {
	bottom: -6px;
	border: 6px solid #fff;
	border-bottom: 0px;
	border-top-color: #000;
	right: 20px;
}
/*leftCenter*/
.leftCenter {
	margin-right: 10px;
	right: 80px;
	top: 0;
}
.leftCenter::before {
	border: 6px solid #fff;
	border-right: 0px;
	border-left-color: #000;
	right: -6px;
}
/*rightCenter*/
.rightCenter {
	margin-left: 10px;
	left: 80px;
	top: 0;
}
.rightCenter::before {
	border: 6px solid #fff;
	border-left: 0px;
	border-right-color: #000;
	left: -6px;
}
/*leftBottom*/
.leftBottom {
	margin-right: 10px;
	right: 80px;
	top: 0;
}
.leftBottom::before {
	border: 6px solid #fff;
	border-right: 0px;
	border-left-color: #000;
	right: -6px;
	top: 50%;
}
/*rightBottom*/
.rightBottom {
	margin-left: 10px;
	left: 80px;
	top: 0;
}
.rightBottom::before {
	border: 6px solid #fff;
	border-left: 0px;
	border-right-color: #000;
	left: -6px;
	top: 50%;
}
</style>
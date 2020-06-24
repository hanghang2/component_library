<template>
	<div class="zz-carousel" @mouseenter="enter()" @mouseleave="leave()">
		<span class="zz-carousel-prev" @click="prev()" v-show="!t">
			<img src="@/assets/jiantouRight2.png">
		</span>
		<div ref="zzcarousel">
			<slot>

			</slot>
		</div>
		<span class="zz-carousel-next" @click="next()" v-show="!t">
			<img src="@/assets/jiantouLeft2.png">
		</span>
		<div class="zz-carousel-nav">
			<div v-for="(item,index) in lefts" @click="active(index)">
				<span v-bind:class="{'active':(item == '000%')}"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {},
	name: "zzcarousel",
	data() {
		return {
			lefts: [],
			zIndex: [],
			t: true,
			open: true,
			isactive: false
		};
	},
	methods: {
		//初始化
		init() {
            let num = this.$refs.zzcarousel.children.length;
            console.log(this.$refs.zzcarousel.children)
			for (let i = 0; i < num; i++) {
				if (i + 1 == num) {
					this.lefts.push("-100%");
					this.zIndex.push(num - i);
				} else {
					this.lefts.push(i + "00%");
					this.zIndex.push(num - i);
				}
			}
		},
		// dom更新样式
		domupdateStyle() {
			let children = this.$refs.zzcarousel.children;
			for (let i = 0; i < children.length; i++) {
				children[i].style.left = this.lefts[i];
				children[i].style.zIndex = this.zIndex[i];
				if (this.isactive && this.lefts[i] != "000%") {
					children[i].style.opacity = 0;
				} else {
					children[i].style.opacity = 1;
				}
			}
		},
		//移入
		enter() {
			this.t = false;
		},
		//移出
		leave() {
			this.t = true;
		},
		next() {
			if (this.open == true) {
				this.open = false;
				var _this = this;
				window.setTimeout(function() {
					_this.open = true;
				}, 500);
				var left1 = this.lefts.pop();
				this.lefts.unshift(left1);
				var zIndex1 = this.zIndex.pop();
				this.zIndex.unshift(zIndex1);
				this.domupdateStyle();
			}
		},
		prev() {
			if (this.open == true) {
				this.open = false;
				var _this = this;
				window.setTimeout(function() {
					_this.open = true;
				}, 500);
				var left1 = this.lefts.shift();
				this.lefts.push(left1);
				var zIndex1 = this.zIndex.shift();
				this.zIndex.push(zIndex1);
				this.domupdateStyle();
			}
		},
		// 跳转到某页面
		active(index) {
			if (this.lefts[index] == "000%") {
				this.isactive = true;
				this.domupdateStyle();
				var _this = this;
				window.setTimeout(function() {
					_this.isactive = false;
				}, 500);
			} else {
				var left1 = this.lefts.pop();
				this.lefts.unshift(left1);
				var zIndex1 = this.zIndex.pop();
				this.zIndex.unshift(zIndex1);
				this.active(index);
			}
		}
	},
	mounted() {
		this.init();
		this.domupdateStyle();
		var _this = this;
		window.setInterval(function() {
			if (_this.t) {
				_this.next();
			}
		}, 2000);
	},
	created: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zz-carousel {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.item-banner {
	height: 100%;
	position: absolute;
	top: 0px;
	width: 100%;
	transition: all 0.5s;
}
.item-banner .banner-img {
	width: 100%;
	height: 525px;
}
.item-banner > a {
	position: absolute;
	z-index: 10;
	top: 335px;
	left: calc(50% - 100px);
	width: 200px;
	background-color: #ba4f2a;
	color: white;
	line-height: 54px;
	text-align: center;
	font: 400 24px/54px "microsoft yahei";
}
.item-banner > a:hover {
	background-color: #ec6233;
}
.item-banner .banner-title {
	position: absolute;
	z-index: 10;
	top: 120px;
	left: calc(50% - 274px);
}
/*上下页*/
.zz-carousel-next,
.zz-carousel-prev {
	background: rgba(31, 45, 61, 0.3);
	display: block;
	width: 50px;
	height: 50px;
	position: absolute;
	z-index: 999;
	top: calc(50% - 25px);
	opacity: 0.5;
	color: #fff;
	font-size: 20px;
	text-align: center;
	border-radius: 50%;
	line-height: 50px;
	cursor: pointer;
}
.zz-carousel-next:hover,
.zz-carousel-prev:hover {
	background: rgba(31, 45, 61, 0.6);
}
.zz-carousel-prev {
	left: 10px;
}
.zz-carousel-next {
	right: 10px;
}
.zz-carousel-nav {
	position: absolute;
	z-index: 99;
	bottom: 40px;
	left: 50%;
	width: auto;
	transform: translateX(-50%);
}
.zz-carousel-nav div {
	float: left;
	padding: 10px 0px;
	cursor: pointer;
}
.zz-carousel-nav span {
	display: block;
	width: 30px;
	height: 2px;
	background: rgba(255, 255, 255, 0.4);
	float: left;
	margin: 0px 4px;
	opacity: 0.7;
}
.zz-carousel-nav span.active {
	background: #ffffff;
}
</style>




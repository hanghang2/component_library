<template>
	<div class="zz-nav-menu" :style="{'background': backgroundColor,'color': textColor}" :class="mode">
		<ul class="zz-menu-demo">
			<li v-for="(item,index) in navData" :key="index" @click.stop="isActive(item,index)" @mouseenter="show(item)" @mouseleave="hide()"
			    v-bind:class="{'isactive': index == isactive && !item.child && mode == 'vertical','isdisabled':item.disabled}" class="menuList"
			    :style="{'color': index == isactive ? activeTextColor : textColor,'border-bottom-color': activeTextColor}"
			>
				{{item.name}}
				<span v-if="item.child" v-show="!isHover" class="zl-select_icon">
					<img class="zl-input__clear" src="@/assets/jiantouDown.png"/>
				</span>
				<span v-if="item.child" v-show="isHover" class="zl-select_icon">
					<img class="zl-input__clear" src="@/assets/jiantouUp.png"/>
				</span>
				<div v-if="item.child" class="icondiv">
					<transition name="fade">
						<ul v-if="item.child" class="menuList-child" v-show="isHover"
						    :style="{'background': backgroundColor,'color': textColor}">
							<zz-nav-menu :navData="item.child"
							             :backgroundColor="backgroundColor"
							             :textColor="textColor"
							             :activeTextColor="activeTextColor"
							             :defaultActive="defaultActive"
							             :mode="mode"
							></zz-nav-menu>
						</ul>
					</transition>
				</div>
			</li>
			<div style="clear: both;"></div>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["navData", "backgroundColor", "textColor", "activeTextColor", "defaultActive", "mode"],
	data() {
		return {
			isHover: false,
			isactive: ''
		};
	},
	methods: {
		isActive(item, index) {
			if (item.disabled) {
				return false;
			}
			this.isactive = index;
			if (this.mode == "vertical") {
				if (item.child) {
					this.isHover = !this.isHover;
				}
			}
		},
		show(item) {
			if (this.mode !== "vertical") {
				if (item.disabled) {
					this.isHover = false;
					return false;
				}
				if (item.child) {
					this.isHover = true;
				}
			}
		},
		hide() {
			if (this.mode !== "vertical") {
				this.isHover = false;
			}
		}
	},
	created: function() {
		this.isactive = this.defaultActive;
		// console.log(this.navData);
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zz-nav-menu .zz-menu-demo {
	padding-left: 55px;
	position: relative;
	height: 60px;
}

.zz-nav-menu .zz-menu-demo .menuList {
	font-size: 14px;
	list-style: none;
	float: left;
	padding: 0 20px;
	/* height: 60px; */
	line-height: 60px;
	cursor: pointer;
	text-align: center;
	color: #333;
	/* position: relative; */
	min-width: 100px;
	border-bottom: 2px;
}

.zz-nav-menu .zz-menu-demo .menuList.isactive {
	border-bottom: 2px solid #0170fe;
	color: #0170fe;
}

.zz-nav-menu .zz-menu-demo .menuList.isdisabled {
	opacity: .25;
	cursor: not-allowed;
	background: none !important;
	border-bottom: none !important;
}

.zz-nav-menu .zz-menu-demo .menuList.isdisabled:hover {
	opacity: .25;
	cursor: not-allowed;
	background: none !important;
	border-bottom: none !important;
}

.zz-nav-menu .zz-menu-demo .menuList:hover {
	transition: all .3s;
	background: rgba(0, 0, 0, 0.1);
}

.zz-nav-menu .zz-menu-demo .menuList .icondiv {
	display: flex;
	justify-content: center;
	align-items: center;
	float: right;
}

.zl-select_icon {
	width: 25px !important;
	height: 100%;
	color: #c0c4cc;
	transition: all 0.3s;
	float: right;
	/* position: absolute;
	right: 5px;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center; */
}

.zl-select_icon .zl-input__clear {
	cursor: pointer;
	transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 14px;
}

.zz-nav-menu .zz-menu-demo .menuList .menuList-child {
	position: absolute;
	top: 62px;
	left: 150px;
	z-index: 100;
	min-width: 150px;
	border: none;
	padding: 5px 0;
	border-radius: 2px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
	background: #fff;
}

.zz-nav-menu .zz-menu-demo .menuList .menuList-child .zz-menu-demo {
	padding-left: 0;
	height: auto;
}

.zz-nav-menu .zz-menu-demo .menuList .menuList-child .menuList {
	float: none;
	text-align: left;
	/* height: 36px; */
	line-height: 36px;
	padding: 0 10px;
}

.zz-nav-menu .zz-menu-demo .menuList .menuList-child .menuList.isactive {
	border-bottom: 0px;
	color: #0170fe;
}

.zz-nav-menu .zz-menu-demo .menuList .menuList-child .menuList img {
	transform: rotate(-90deg);
}

.fade-enter-active, .fade-leave-active {
	transition: all .3s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.zz-nav-menu.vertical {
	width: 250px
}
.zz-nav-menu.vertical .zz-menu-demo  {
	height: auto;
}
.zz-nav-menu.vertical .zz-menu-demo .menuList {
	float: none;
	text-align: left;
	position: relative;
	color: #333;
	padding-right: 0;
	line-height: 50px;
}
.zz-nav-menu.vertical .zz-menu-demo .menuList .menuList-child {
	padding: 0;
}
.zz-nav-menu.vertical .zz-menu-demo {
	padding-left: 0px;
}
.zz-nav-menu.vertical .zz-menu-demo .menuList.isactive {
	border-bottom: 0px;
	color: #0170fe;
}
.zz-nav-menu.vertical .zz-menu-demo .menuList .menuList-child .menuList {
	line-height: 50px;
}
.zz-nav-menu.vertical .zz-menu-demo .menuList .menuList-child {
	position: relative;
	top: 0;
	left: 0;
	box-shadow: none;
}

.zz-nav-menu.vertical .zz-menu-demo .menuList .menuList-child .menuList {
	padding-right: 0;    
	padding-left: 55px;
}

.zz-nav-menu.vertical .zz-menu-demo .menuList .menuList-child .menuList img {
	transform: rotate(0deg);
}

.zz-nav-menu.vertical .zl-select_icon {
	width: 25px !important;
	height: 50px;
	color: #c0c4cc;
	transition: all 0.3s;
	margin-top: 0px;
	/* position: absolute; */
	right: 5px;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.zz-nav-menu.vertical .zz-menu-demo .menuList:hover {
	transition: all .3s;
	background: rgba(0, 0, 0, 0.1);
}

.zz-nav-menu.vertical .fade-leave-active, .fade-enter-active {
	transition: max-height 0.5s;
}

.zz-nav-menu.vertical .fade-enter, .fade-leave-to {
	max-height: 0;
}

.zz-nav-menu.vertical .fade-enter-to, .fade-leave {
	max-height: 400px;
}
</style>

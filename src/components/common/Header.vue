<template>
	<div class="header">
		<div class="logo">
			<h1>
				<img src="../../assets/logo.png"/>zzComponent
			</h1>
		</div>
		<div class="header_menu">
			<li class="menu_item" :class="getClass(2)">
				<router-link to="/Main">组件</router-link>
			</li>
			<li class="menu_item" :class="getClass(1)">
				<router-link to="/About">文档</router-link>
			</li>
			<li class="menu_item" :class="getClass(0)">
				<router-link to="/">首页</router-link>
			</li>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			pathArr:['/','/About']
		}
	},
	methods:{
		getClass(index){
			if(index === 2 && (this.pathArr.indexOf(this.$route.path) == -1)) return 'active';
			if(this.$route.path === this.pathArr[index]) return 'active';

			return ''
		}
	}
};
</script>

<style scoped>
.header {
	height: 70px;
	padding: 0 40px;
	display: flex;
	flex-flow: nowrap;
	border-bottom: 1px solid #dcdfe6;
	box-shadow: 0 2px 8px #f0f1f2;
}

.logo {
	flex: .5 0 auto;
}

.logo img {
	width: 30px;
	position: relative;
	top: 10px;
	height: 30px;
	margin-right: 10px;
}

.logo h1 {
	text-align: left;
	line-height: 70px;
	font-size: 18px;

}

.header_menu {
	flex: .5 1 auto;
}

.header_menu .menu_item {
	min-width: 80px;
	height: 70px;
	line-height: 70px;
	border-top: 2px solid transparent;
	float: right;
	text-align: center;
}

.header_menu .menu_item a {
	display: block;
	height: 70px;
	line-height: 70px;
	font-size: 14px;
}

.header_menu .menu_item:hover {
	/* border-top: 2px solid #0170fe; */
	transition: color .3s cubic-bezier(.645, .045, .355, 1), border-color .3s cubic-bezier(.645, .045, .355, 1), background .3s cubic-bezier(.645, .045, .355, 1), padding .15s cubic-bezier(.645, .045, .355, 1)
}

.header_menu .menu_item:hover a {
	color: #0170fe;
	transition: color .3s cubic-bezier(.645, .045, .355, 1), border-color .3s cubic-bezier(.645, .045, .355, 1), background .3s cubic-bezier(.645, .045, .355, 1), padding .15s cubic-bezier(.645, .045, .355, 1)
}

.header_menu .menu_item.active {
	border-top: 2px solid #0170fe;
}

.header_menu .menu_item.active a {
	color: #0170fe;
}

</style>

<template>
	<div class="carousel">
		<p>基础用法</p>
		<div class="list" style="height: 300px;width: 550px;">
			<zz-carousel>
				<div class="item-banner" v-for="(item,index) in bannerdata">
					{{index + 1}}
				</div>
			</zz-carousel>
		</div>
	</div>
</template>

<script>
export default {
	name: "Index26",
	data() {
		return {
			bannerdata: ["", "", "", ""]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.carousel p {
	margin-bottom: 10px;
}
.carousel .list {
	margin-bottom: 30px;
	border: 1px solid #dddddd;
	padding: 25px;
	border-radius: 5px;
}
.carousel .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}
.carousel .list span {
	width: 80px;
	display: inline-block;
	text-align: center;
}
a {
	color: #0170fe;
}
.item-banner:nth-of-type(1) {
	background: #99a9bf;
}
.item-banner:nth-of-type(2) {
	background: #d3dce6;
}
.item-banner:nth-of-type(3) {
	background: #99a9bf;
}
.item-banner:nth-of-type(4) {
	background: #d3dce6;
}
</style>
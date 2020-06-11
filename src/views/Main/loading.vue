<template>
	<div class="loading">
		<h3>区域加载</h3>
		<div class="loading-item1" v-zzloading="zzloading">
			<span v-for="(item,index) in Array(300)" :key="index">内容</span>
		</div>
		<p class="info">
			<zz-button type="primary" @click.native="zzloading = true">显示</zz-button>
			<zz-button @click.native="zzloading = false">关闭</zz-button>
		</p>
		<h3>区域加载-自定义颜色</h3>
		<div class="loading-item1" v-zzloading="zzloading2" background="rgba(0, 0, 0, 0.8)" zzloadingClass="我定义的class">
			<span v-for="(item,index) in Array(300)" :key="index">内容</span>
		</div>
		<br />
		<div class="demo-contain">
			<p>使用<code>background</code>属性添加颜色，<code>zzloadingClass</code>属性添加自定义class。</p>
		</div>
		<p class="info">
			<zz-button type="primary" @click.native="zzloading2 = true">显示</zz-button>
			<zz-button @click.native="zzloading2 = false">关闭</zz-button>
		</p>
		<p class="info"></p>
	</div>
</template>
<script>
export default {
	data(){
		return {
			zzloading:true,
			zzloading2:false
		}
	},
	methods:{
	}
}
</script>
<style scoped lang="scss">
.loading {
	background: #ffffff;
	height: 100%;
	padding-bottom: 20px;
	overflow-y: hidden;
	h3{
		font-size: 14px;
		font-weight: normal;
		margin: 10px 0;
	}
	.loading-item1{
		border: 1px solid #dddddd;
		padding: 15px 20px;
		border-radius: 5px;
		&:hover {
			transition: all 0.5s;
			box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
		}
	}
	p.info{
		padding: 20px 0;
	}

	&:hover{
		overflow-y: auto;
	}
	&::-webkit-scrollbar {
		width: 10px!important;
		height: 10px!important;
		-webkit-appearance: none;
	}
	&::-webkit-scrollbar-thumb {
		height: 5px;
		border: 1px solid transparent;
		border-top: 0;
		border-bottom: 0;
		-webkit-border-radius: 6px;
		background-color: #ccc;
		background-clip: padding-box;
	}
}
</style>

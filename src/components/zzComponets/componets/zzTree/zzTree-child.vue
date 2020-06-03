<template>
	<div class="zzTree-child">
		<div class="zzTree-child-label" @click="childrenShow = !childrenShow">
			<span class="zzTree-child-label-icon" :class="classFilter(treeItem)"></span>
			<span>{{treeItem[props.label]}}</span>
		</div>
		<transition name="fade">
			<div class="zzTree-child-list" v-show="childrenShow">
				<zzTreeChild v-for="(item,index) in treeItem[props.children]" :key="index" :treeItem="item"></zzTreeChild>
			</div>
		</transition>
	</div>
</template>
<script>
import zzTreeChild from "./zzTree-child";
export default {
	name:'zzTreeChild',
	components: { zzTreeChild },
	inject: ['props'],
	props: {
		treeItem: {
			type: Object,
			default: () => {}
		}
	},
	data(){
		return {
			childrenShow:false
		}
	},
	methods:{
		classFilter(item){
			if(item[this.props.children] && item[this.props.children].length){
				return this.childrenShow ? 'open' : 'close';
			}
			return '';
		}
	}
};
</script>
<style scoped>
.zzTree-child {
}
.zzTree-child-label{
	font-size: 14px;
	color: #333333;
	height: 26px;
	line-height: 26px;
	cursor: pointer;
	padding-left: 5px;
}
.zzTree-child-label:hover{
	background: #f5f7fa;
}
.zzTree-child-label span{
	vertical-align: middle;
}
.zzTree-child-list{
	padding-left: 18px;
	opacity: 1;
}
.zzTree-child-label-icon{
	display: inline-block;
	width: 0;
	height: 0;
	border: 6px solid rgba(255,255,255,0);
	border-right-width: 4px;
	border-left-width: 4px;
	border-top-color: #c0c4cc;
	position: relative;
	transform-origin: center center;
	opacity: 0;
	margin-right: 10px;
}
.zzTree-child-label-icon.open{
	opacity: 1;
	top: 3px;
}
.zzTree-child-label-icon.close{
	opacity: 1;
	top: 0px;
	transform: rotate(-90deg);
}

.fade-leave-active,.fade-enter-active {
	transition: all 0.1s linear;
}
.fade-enter,.fade-leave-to {
	opacity: 0;
}

</style>

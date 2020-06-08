<template>
	<div class="zzTree-child">
		<div class="zzTree-child-label" @click="childrenShow = !childrenShow">
			<span class="zzTree-child-label-icon" :class="classFilter(treeItem)"></span>
			<zzCheckbox v-if="showCheckbox" v-model="checkbox" @change="checkboxChange" :indeterminate="indeterminate" @click.native.stop=""></zzCheckbox>
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
import zzCheckbox from '../zzCheckbox';
import zzTreeChild from "./zzTree-child";
export default {
	name:'zzTreeChild',
	components: { zzTreeChild , zzCheckbox},
	inject: ['props','showCheckbox'],
	props: {
		treeItem: {
			type: Object,
			default: () => {}
		}
	},
	data(){
		return {
			childrenShow:false,
			checkbox:false,
			indeterminate:false
		}
	},
	watch:{
		checkbox(newVal){
			//子选中状态修改
			this.$children.map((item)=>{
				if(item.$options.name == 'zzTreeChild') item.checkbox = newVal;
				return item;
			})
			//父选中状态修改
			let setParent = (parent)=>{
				if(parent.$options.name == 'zzTreeChild'){
					let checkboxArr = [];
					parent.$children.map((item)=>{
						if(item.$options.name == 'zzTreeChild') checkboxArr.push(item.checkbox);
						return item;
					})
					if(checkboxArr.indexOf(false) === -1){
						parent.indeterminate = false;
						parent.checkbox = true;
					}else if(checkboxArr.indexOf(true) === -1){
						parent.indeterminate = false;
						parent.checkbox = false;
					}else{
						parent.indeterminate = true;
					}
					if(parent.$parent && parent.$parent.$options.name == 'zzTreeChild'){
						setParent(parent.$parent);
					}
				}
			}
			setParent(this.$parent);
		}
	},
	methods:{
		checkboxChange(){//checkbox切换
		},
		classFilter(item){
			if(item[this.props.children] && item[this.props.children].length){
				return this.childrenShow ? 'open' : 'close';
			}
			return '';
		}
	},
};
</script>
<style scoped>
.zzTree-child {
}
.zzTree-child-label{
	font-size: 14px;
	color: #333333;
	height: 30px;
	line-height: 30px;
	cursor: pointer;
	padding-left: 5px;
}
.zzTree-child-label:hover{
	background: #f5f7fa;
}
.zzTree-child-label span{
	vertical-align: middle;
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

.zzTree-child-list{
	padding-left: 18px;
	overflow: hidden;
}
.fade-leave-active,.fade-enter-active {
	transition: max-height 0.5s;
}
.fade-enter,.fade-leave-to {
	max-height:0 ;
}
.fade-enter-to,.fade-leave {
	max-height: 400px ;
}
</style>

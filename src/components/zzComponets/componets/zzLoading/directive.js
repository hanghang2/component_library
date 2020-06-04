import Vue from "vue";
import './zzloading.css'

Vue.directive("zzloading", {
	inserted: function() {
	},//当元素插入到dom的时候，会执行insert，只执行一次
	bind: function(el, binding) {//每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
		var tmp = document.createElement('div');
		tmp.className = 'zzloading';
		tmp.innerHTML = '<div class="zzloading-icon"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div>';
		if(el.getAttribute('background')) tmp.style.background = el.getAttribute('background');
		if(el.getAttribute('zzloadingClass')) tmp.className = 'zzloading ' + el.getAttribute('zzloadingClass');
		el.className += ' zzloading-box'
		if(!binding.value) tmp.style.display = 'none';
		el.appendChild(tmp);
	},
	updated: function() {//vnode更新触发 可能触发多次
	},
	componentUpdated: function (el, binding) {// 被绑定元素所在模板完成一次更新周期时调用。
		el.getElementsByClassName('zzloading')[0].style.display = binding.value ? 'flex' : 'none';
	}
});

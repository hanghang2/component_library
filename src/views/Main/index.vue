<template>
	<div id="nav">
		<div class="main_left">
			<li class="nav-list nav-first">
				<a>组件</a>
			</li>
			<li class="nav-list">
				<router-link to="/zzTable">table表格</router-link>
			</li>
		</div>
		<div class="main_body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {};
</script>

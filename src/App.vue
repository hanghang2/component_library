<template>
	<div id="app">
		<Header></Header>
		<div id="appBody">
			<router-view/>
		</div>
	</div>
</template>
<script>
import Header from "./components/common/Header.vue";

export default {
	components: { Header }
};
</script>
<style>
@import "./style/zhanglu.css";
</style>

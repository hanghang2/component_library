<template>
	<div class="home">
		<p>eslint空格终于可以了啊</p>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "Home",
	components: {
		HelloWorld
	},
	data() {
		return {
			name: "eslint空格终于可以了啊"
		};
	}
};
</script>
<style lang="scss" scoped>
p {
	color: #dddddd;
	font-size: 18px;
}
</style>

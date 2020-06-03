<template>
	<div class="HomePage">
		<div class="home-banner">
			<div>
				<h1>zzComponent</h1>
				<router-link to="/Main">
					<button class="button-primary">开始使用</button>
				</router-link>

				<router-link to="/About">
					<button class="button-clean">查看文档</button>
				</router-link>
			</div>
		</div>
	</div>
</template>
<style scoped>
.HomePage .home-banner {
	height: 400px;
	background: url("../../assets/bg1.jpg");
	background-size: 100% 100%;
	display: flex;
	justify-content: center; /* 水平居中 */
	align-items: center; /* 垂直居中 */
}

.HomePage .home-banner h1 {
	margin-bottom: 50px;
}

.HomePage .home-banner .button-primary {
	height: 40px;
	padding: 5px 25px;
	font-size: 14px;
	border-radius: 15px;
	outline: none;
	border: 0;
	color: #fff;
	background: #0170fe;
	margin: 0 10px;
}

.HomePage .home-banner .button-primary a {
	color: #fff;
	background: #0170fe;
}

.HomePage .home-banner .button-clean {
	height: 40px;
	padding: 5px 25px;
	font-size: 14px;
	border-radius: 15px;
	outline: none;
	border: 0;
	color: #0170fe;
	background: #fff;
	margin: 0 10px;
	border: 1px solid #0170fe;
}

.HomePage .home-banner .button-clean a {
	color: #0170fe;
	background: #fff;
}

.HomePage .home-banner button:hover {
	opacity: 0.7;
}
</style>

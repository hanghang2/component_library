<template>
	<div class="tabs">
		<p>基础用法</p>
		<div class="list">
			<zz-tabs :tabsData="tabsData"></zz-tabs>
		</div>
		<br />
		<p>card</p>
		<div class="list">
			<zz-tabs :tabsData="tabsData" type="card" tabsClose="true"></zz-tabs>
		</div>
		<br />
		<p>border-card</p>
		<div class="list">
			<zz-tabs :tabsData="tabsData" type="border-card" tabsClose="true"></zz-tabs>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabsData: ["用户管理", "配置管理", "角色管理", "定时任务补偿"]
		};
	}
};
</script>
<style scoped>
.tabs .list {
	margin-bottom: 30px;
	border: 1px solid #ddd;
	padding: 25px;
	border-radius: 5px;
}
.tabs .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}

.tabs p {
	margin-bottom: 10px;
}
</style>
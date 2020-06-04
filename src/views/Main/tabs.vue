<template>
	<div class="tabs">
		<div class="list">
			<p>基础用法</p>
			<zz-tabs :tabsData="tabsData"></zz-tabs>
		</div>
		<br />
		<div class="list">
			<p>card</p>
			<zz-tabs :tabsData="tabsData" type="card" tabsClose="true"></zz-tabs>
		</div>
		<br />
		<div class="list">
			<p>border-card</p>
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
}
.tabs .list:hover {
	transition: all 0.5s;
	box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
}

.tabs .list p {
	margin-bottom: 10px;
}
</style>
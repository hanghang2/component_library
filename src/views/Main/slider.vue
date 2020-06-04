<template>
	<div class="Slider">
		<p>基础用法</p>
		<div class="list">
			<zz-slider v-model="value1" id="Slider1"></zz-slider>
		</div>
		<br />
		<br />
		<p>隐藏Tooltip</p>
		<div class="list">
			<zz-slider v-model="value2" id="Slider2" :show-tooltip="false"></zz-slider>
		</div>
		<br />
		<br />
		<p>禁用</p>
		<div class="list">
			<zz-slider v-model="value2" id="Slider3" disabled></zz-slider>
		</div>
		<!-- <div class="list">
            <span>设置最大最小值</span>
            <zz-Slider v-model="value3" id="Slider4" min="10" max="20"></zz-Slider>
		</div>-->
	</div>
</template>

<script>
export default {
	data() {
		return {
			value1: 90,
			value2: 3,
			value3: 10
		};
	}
};
</script>

<style lang="scss" scoped>
.Slider {
	.list {
		margin-top: 20px;
		height: 70px;
		border: 1px solid #dddddd;
		border-radius: 5px;
		padding: 20px;
		span {
			float: left;
			width: 100px;
		}
		.zz-Slider {
			float: left;
		}
		&:hover {
			transition: all 0.5s;
			box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
		}
	}
}
</style>
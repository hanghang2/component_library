import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage/index.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePage
	},
	{
		path: "/About",
		name: "About",
		component: () => import("../views/About.vue")
	},
	{
		path: "/Main",
		name: "Main",
		component: () => import("../views/Main/index.vue"),
		redirect:'/zzButton',
		children: [
			{
				path: "/zzButton",
				name: "zzButton",
				component: () => import("../views/Main/button.vue")
			}, {
				path: "/zzTable",
				name: "zzTable",
				component: () => import("../views/Main/table.vue")
			},
			{
				path: "/zzTree",
				name: "zzTree",
				component: () => import("../views/Main/tree.vue")
			}, {
				path: "/zzInput",
				name: "zzInput",
				component: () => import("../views/Main/input.vue")
			},{
				path: "/zzSelect",
				name: "zzSelect",
				component: () => import("../views/Main/select.vue")
			},{
				path: "/checkbox",
				name: "checkbox",
				component: () => import("../views/Main/checkbox.vue")
			},{
				path: "/zzCascader",
				name: "zzCascader",
				component: () => import("../views/Main/cascader.vue")
			},{
				path: "/zzDatePicker",
				name: "zzDatePicker",
				component: () => import("../views/Main/datePicker.vue")
			},{
				path: "/zzTransfer",
				name: "zzTransfer",
				component: () => import("../views/Main/transfer.vue")
			},{
				path: "/zzTabs",
				name: "zzTabs",
				component: () => import("../views/Main/tabs.vue")
			}, {
				path: "/zzLoading",
				name: "zzLoading",
				component: () => import("../views/Main/loading.vue")
			},{
				path: "/zzSlider",
				name: "zzSlider",
				component: () => import("../views/Main/slider.vue")
			},{
				path: "/zzNavMenu",
				name: "zzNavMenu",
				component: () => import("../views/Main/NavMenu.vue")
			},{
				path: "/zzDialog",
				name: "zzDialog",
				component: () => import("../views/Main/dialog.vue")
			},{
				path: "/zzCarousel",
				name: "zzCarousel",
				component: () => import("../views/Main/carousel.vue")
			},{
				path: "/zzAlert",
				name: "zzAlert",
				component: () => import("../views/Main/alert.vue")
			},{
				path: "/zzTooltip",
				name: "zzTooltip",
				component: () => import("../views/Main/tooltip.vue")
			},
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;

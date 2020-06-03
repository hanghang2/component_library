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
			},
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;

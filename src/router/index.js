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
		children: [{
			path: "/zzTable",
			name: "zzTable",
			component: () => import("../views/Main/table.vue"),
		}]
	},
];

const router = new VueRouter({
	routes
});

export default router;

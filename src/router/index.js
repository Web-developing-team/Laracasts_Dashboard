import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/dashboard",
		},
		{
			path: "/dashboard",
			name: "Dashboard",
			component: DashboardView,
		},
		{
			path: "/login",
			name: "Login",
			component: LoginView,
		},
		// {
		// 	path: "/about",
		// 	name: "about",
		// 	* route level code-splitting
		// 	* this generates a separate chunk (About.[hash].js) for this route
		// 	* which is lazy-loaded when the route is visited.
		// 	component: () => import("../views/AboutView.vue"),
		// },
	],
});

export default router;

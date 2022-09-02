import { defineStore } from "pinia";
import axiosClient from "@/axios";

export const useUserStore = defineStore({
	id: "user",
	state: () => ({
		data: {},
		token: "",
	}),
	actions: {
		login(user) {
			axiosClient.post("/management/auth/login", user).then(({ data }) => {
				this.data = data.user;
				this.token = data.token;
			});
		},
	},
});

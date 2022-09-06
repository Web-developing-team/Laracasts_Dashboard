import { defineStore } from "pinia";
import axiosClient from "@/axios";

export const useUserStore = defineStore("user", {
	state: () => ({
		data: {},
		token: "",
		errorMsg: "",
	}),
	getters: {},
	actions: {
		async login(user) {
			return await axiosClient
				.post("/management/auth/login", user)
				.then(({ data }) => {
					this.data = data.user;
					this.token = data.token;
					console.log("Success!!");
				})
				.catch((err) => {
					this.errorMsg = err.response.data.error;
					console.log(err);
				});
		},
	},
});

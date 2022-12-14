import axios from "axios";
import { useUserStore } from "@/stores/user";

const axiosClient = axios.create({
	baseURL: "http://localhost:8000",
});

axiosClient.interceptors.request.use((config) => {
	const userStore = useUserStore();
	config.headers.Authorization = `Bearer ${userStore.token}`;
	return config;
});

export default axiosClient;

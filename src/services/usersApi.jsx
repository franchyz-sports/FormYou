import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});

API.interceptors.request.use(({ headers, ...config }) => ({
	...config,
	headers: {
		...headers,
		"Content-Type": "application/json",
		Authorization: headers.Auhtorization || Cookies.get("token"),
	},
}));

export default class ApiManager {
	static async registerUser(param) {
		const res = await API.post("/students.json", param);
		return res.data;
	}

	static async loginUser(param) {
		const res = await API.post("/teachers/sign_in.json", param);
		return {
			...res.data,
			token: res.headers.authorization,
		};
	}

	static async logoutUser() {
		const res = await API.delete("/teachers/sign_out.json");
		return res;
	}
}

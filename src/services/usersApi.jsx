//import axios from "axios";
//import Cookies from "js-cookie";


/*const API = axios.create({
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
		const res = await API.post("/students/sign_in.json", param);
		return {
			...res.data,
			token: res.headers.authorization,
		};
	}

	static async logoutUser() {
		const res = await API.delete("/students/sign_out.json");
		return res;
	}
}
*/

import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

function signUp(email, password, type) {
  const data = {
    email: email,
    password: password,
  };

  let baseURL = process.env.REACT_APP_BACKEND_URL
  let endUrl = `/${type}s.json`
  let url = baseURL + endUrl
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => { return response })

}

function signIn(email, password, type) {
  const data = {[type]: 
    {
      email: email,
      password: password,
    }
  };

  let baseURL = process.env.REACT_APP_BACKEND_URL
  let endUrl = `/${type}s/sign_in.json`
  let url = baseURL + endUrl
  let ans

  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => { return response })
}

export {signIn, signUp}


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

function signUp(email, password) {
  const data = {
    email: email,
    password: password,
  };

  return fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => { return response })

}

function signIn(identifier, password) {
  const data = {
    identifier: identifier,
    password: password,
  };

  return fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => {return response})
}


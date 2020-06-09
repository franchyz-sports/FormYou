
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import * as API from 'services/users/usersApi';
import { LOG_IN, LOG_OUT } from "./usersType";


// export const logIn = () => {
// 	return {
// 		type: LOG_IN,
// 	};
// };

// export const logOut = () => {
// 	return {
// 		type: LOG_OUT,
// 	};
// };

 
export const registerUser = (email, password, role) => {
    
	const data = {
	  role : role,
	  email: email,
	  password : password
	}

	

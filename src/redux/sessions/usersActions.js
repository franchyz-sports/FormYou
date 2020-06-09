import { LOG_IN } from "./usersType";
import { LOG_OUT } from "./usersType";

export const logIn = () => {
	return {
		type: LOG_IN,
	};
};

export const logOut = () => {
	return {
		type: LOG_OUT,
	};
};

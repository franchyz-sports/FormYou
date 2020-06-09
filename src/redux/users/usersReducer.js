import { LOG_IN } from "./usersType";
import { LOG_OUT } from "./usersType";

const initialState = {
	users: "not_authenticated",
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				users: "authenticated",
			};
		case LOG_OUT:
			return {
				...state,
				users: "not_authenticated",
			};
		default:
			return state;
	}
};

export default usersReducer;

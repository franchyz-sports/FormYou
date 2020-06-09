import { createStore, combineReducers } from "redux";

import usersReducer from "./users/usersReducer";
import sessionsReducer from "./sessions/sessionsReducer";

const rootReducer = combineReducers({
	users: usersReducer,
	sessions: sessionsReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

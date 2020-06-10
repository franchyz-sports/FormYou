// import { createStore, combineReducers } from "redux";
// import usersReducer from "./users/usersReducer";
// import sessionsReducer from "./sessions/sessionsReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

// const rootReducer = combineReducers({
// 	users: usersReducer,
// 	sessions: sessionsReducer,
// });

// const store = createStore(
// 	rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

const rootReducer = combineReducers({
	...reducers,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;

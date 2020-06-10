import React from "react";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<NavBar />
					<Switch>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;

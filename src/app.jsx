import React from "react";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
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
	);
};

export default App;

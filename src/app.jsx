import React from "react";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sessions from "./pages/Sessions";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Privateroute";

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					{/* <Route path="/profile" component={Profile} /> */}
					{/* <Route path="/sessions" component={Sessions} /> */}
					<Route path="/" component={Home} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<PrivateRoute exact path="/sessions" component={Sessions} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;

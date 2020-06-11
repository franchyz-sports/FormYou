<<<<<<< HEAD
import React from "react";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sessions from "./pages/Sessions";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Privateroute";
=======
import React from 'react';
// React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './redux';
// Components
import NavBar from './components/NavBar';
// Pages
import FormationIndex from './pages/Formation/FormationIndex';
import FormationShow from './pages/Formation/FormationShow';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
>>>>>>> c1d94b40d74b67f63b09d346d3a1b8f403fcfc2d

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<NavBar />
				<Switch>
<<<<<<< HEAD
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					{/* <Route path="/profile" component={Profile} /> */}
					{/* <Route path="/sessions" component={Sessions} /> */}
					<Route path="/" component={Home} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<PrivateRoute exact path="/sessions" component={Sessions} />
=======
					<Route exact path='/' component={Home} />
					<Route exact path='/formations' component={FormationIndex} />
					<Route path={`/formation/:formation_id`} component={FormationShow} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
>>>>>>> c1d94b40d74b67f63b09d346d3a1b8f403fcfc2d
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;

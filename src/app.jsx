import React from 'react';
// React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import NavBar from './components/NavBar'
// Pages
import FormationIndex from './pages/Formation/FormationIndex';
import FormationShow from './pages/Formation/FormationShow';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/formations' component={FormationIndex} />
				<Route path={`/formation/:formation_id`} component={FormationShow} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</Router>
	);
};

export default App;

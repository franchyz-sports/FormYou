import React from 'react';
// React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import FormationIndex from './pages/FormationIndex';
import FormationShow from './pages/FormationShow';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/formation-index'>
					<FormationIndex />
				</Route>
				<Route exact path='/formation-show'>
					<FormationShow />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

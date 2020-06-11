import React from 'react';
// React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from 'redux/store.js';
// Components
import Navbar from './components/NavBar/NavBar';
// Pages
import CompanyIndex from './pages/Company/CompanyIndex';
import CompanyShow from './pages/Company/CompanyShow';
import FormationIndex from './pages/Formation/FormationIndex';
import FormationShow from './pages/Formation/FormationShow';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SessionIndex from './pages/Session/SessionIndex';
import StudentShow from './pages/Student/StudentShow';
import TeacherIndex from './pages/Teacher/TeacherIndex';
import TeacherShow from './pages/Teacher/TeacherShow';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/companies' component={CompanyIndex} />
					<Route path={`/company/:company_id`} component={CompanyShow} />
					<Route exact path='/formations' component={FormationIndex} />
					<Route path={`/formation/:formation_id`} component={FormationShow} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/sessions' component={SessionIndex} />
					<Route exact path='/student' component={StudentShow} />
					<Route exact path='/teachers' component={TeacherIndex} />
					<Route exact path='/teacher' component={TeacherShow} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;

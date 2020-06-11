import React, { useEffect, useState } from 'react';
// React Router DOM
import { Link, useHistory } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Cookies
// import Cookies from 'js-cookie';
// Components
import AutBtn from './AutBtn';


const NavBar = () => {
	const [keyword, setKeyword] = useState("");
	const [signedIn, setSignedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState('Otto');

	// const data = useSelector((store) => store.authReducers);
	// const dispatch = useDispatch();
	// const history = useHistory();

	// useEffect(() => {
	// 	if (data.token === null) history.push("/login");
	// }, [data, history]);

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>TacosWillFormYou</Link>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/formations' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Discover online courses</Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/formations'>Formations</Link>
							<Link className='nav-link' to='/teachers'>Our teachers</Link>
						</div>
					</li>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/formations' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>About us</Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/companies'>They trust us</Link>
						</div>
					</li>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Test</Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/sessions'>Sessions</Link>
							<Link className='nav-link' to='/teacher'>Teacher Profile</Link>
							<Link className='nav-link' to='/student'>Student Profile</Link>
						</div>
					</li>
				</ul>
				<form className='form-inline my-2 my-lg-0'>
					<input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={(e) => setKeyword(e.target.value)} />
					<button className='btn btn-outline-success my-2 my-sm-0 mr-2' type='submit'>Search</button>
				</form>
				<AutBtn
					signedIn={signedIn}
					currentUser={currentUser}
				/>
			</div>
		</nav>
	);
};

export default NavBar;

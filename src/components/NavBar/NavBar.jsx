import React, { useState } from 'react';
// React Router DOM
import { Link } from 'react-router-dom';
// Redux
// import { useDispatch, useSelector } from 'react-redux';
// Cookies
// import Cookies from 'js-cookie';
// Components
import AutBtn from './AutBtn';


const NavBar = () => {
	const [setKeyword] = useState("");

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
						</div>
					</li>
				</ul>
				<form className='form-inline my-2 my-lg-0'>
					<input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={(e) => setKeyword(e.target.value)} />
					<button className='btn btn-outline-success my-2 my-sm-0 mr-2' type='submit'>Search</button>
				</form>
				<AutBtn />
			</div>
		</nav>
	);
};

export default NavBar;

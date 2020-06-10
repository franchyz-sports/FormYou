import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { 
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>TacosWillFormYou</Link>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/formations'>Formations</Link>
					</li>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/works' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Connect</Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/login'>Login</Link>
							<div className='dropdown-divider'></div>
							<Link className='nav-link' to='/register'>Register</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

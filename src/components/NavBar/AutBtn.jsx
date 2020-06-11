import React from 'react';
// React Router DOM
import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Cookies
import Cookies from 'js-cookie';

const AutBtn = () => {
	const signedIn = useSelector(state => state.authReducer.isAuth);
	const currentUser = useSelector(state => state.authReducer.id);
	console.log(`signedIn? ${signedIn}`);
	console.log(`currentUser? ${currentUser}`);

	const disconnect = () => {
		Cookies.remove('token');
		console.log('bye')
	};

	if (signedIn === true) {
		return (
			<div className='btn-group' role='group'>
				<button id='btnGroupDrop1' type='button' className='btn btn-primary dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Welcome {currentUser}
				</button>
				<div className='dropdown-menu w-100'>
					<Link className='dropdown-item' to='/profile'>My Profile</Link>
					<div className='dropdown-divider'></div>
					<button className='dropdown-item' onClick={disconnect}>Logout</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className='btn-group' role='group'>
				<button id='btnGroupDrop1' type='button' className='btn btn-primary dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Connect
				</button>
				<div className='dropdown-menu w-100'>
					<Link className='dropdown-item' to='/login'>Login</Link>
					<Link className='dropdown-item' to='/register'>Register</Link>
				</div>
			</div>
		);
	};
};

export default AutBtn;

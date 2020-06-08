import React from 'react';
// Style
import '../styles/Header.scss'

const Header = () => {
	return (
		<header>
			<div className='overlay'></div>
			<video playsInline='playsInline' autoPlay='autoPlay' muted='muted' loop='loop'>
				<source src='https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4' type='video/mp4' />
			</video>
			<div className='container h-100'>
				<div className='d-flex h-100 text-center align-items-center'>
					<div className='w-100 text-white'>
						<h1 className='display-3'>FormYou</h1>
						<p className='lead mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

import React from 'react';
// Style
import '../styles/Header.scss'

const Header = () => {
	return (
		<div>
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
			<section className='my-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec posuere odio. Donec condimentum dolor eu leo mattis, vulputate sodales nunc condimentum. Nulla iaculis semper ipsum, eu pharetra erat consectetur eu. Vestibulum tincidunt iaculis augue, et iaculis nunc consequat id. Aenean elementum at arcu sit amet tempus. Ut non aliquam mi, eget pharetra ex. Fusce interdum tincidunt lobortis. In faucibus venenatis est vulputate consectetur. Nulla odio enim, sagittis in facilisis nec, varius ut orci. Aliquam accumsan, mi et efficitur facilisis, ipsum orci tincidunt mi, id iaculis risus sapien vel diam. Phasellus sed dignissim orci. Morbi et laoreet libero, eget porta neque. Cras euismod ultricies est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Morbi pretium diam sit amet elit euismod, ut pretium ipsum congue.</p>
							<p>Ut aliquet efficitur justo, sit amet dignissim ante feugiat eget. Morbi nisl sem, rhoncus id pellentesque id, fermentum a odio. Mauris erat arcu, scelerisque a rutrum non, posuere in mi. Nam ornare erat laoreet, rutrum dolor at, molestie odio. Proin finibus condimentum neque non ullamcorper. Sed a venenatis ligula. Vestibulum mi justo, congue eu metus quis, dictum convallis orci. Ut eleifend felis in ante mollis aliquet.</p>
							<p className='mb-0'>
								Video Header created by <a href='https://startbootstrap.com'>Start Bootstrap</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;

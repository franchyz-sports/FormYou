import React from 'react';

const TeacherShow = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<div className='row'>
							<div className='col-lg-8 mx-auto'>
								<p className='display-3'>Teacher First/Last Name</p>
							</div>
							<div className='d-flex col-lg-4 col-md-8 align-items-center justify-content-center'>
								<img className='img-fluid rounded float-left' src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg' alt='Company' />
							</div>
						</div>
						<p className='display-4'>Expertise</p>
						<p className='small'>
							Member since : created_at
							<br></br>
							Last profile update : updated_at
						</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare massa vitae luctus porttitor. Phasellus lobortis tellus sapien, vel maximus dolor hendrerit tempor. Nullam malesuada, risus eget semper laoreet, nunc sem mattis diam, eget condimentum est erat nec ipsum. In libero dolor, malesuada sed mollis sit amet, eleifend ac diam. Aenean at turpis posuere magna consequat auctor quis eget quam. Nunc nec egestas nisi. Suspendisse sem nisl, eleifend a posuere nec, hendrerit volutpat turpis.</p>
					</div>
				</div>
			</div>
		</section>	
	);
};

export default TeacherShow;

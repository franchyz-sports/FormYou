import React from 'react';

const CompanyCards = () => {
	return (
		<div className='card-columns'>
			<div className='card'>
				<img className='card-img-top' src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg' alt='Company' />
				<div className='card-body'>
					<h5 className='card-title'>Company Name (+ link to Company Profile)</h5>
				</div>
			</div>
		</div>
	);
};

export default CompanyCards;

import React from 'react';

const FormationCards = () => {
	return (
		<div className='card-columns'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>Formation Title</h5>
					<p className='card-text'>Teacher (+ link to Teacher Profile)</p>
					<p className='card-text'>Formation Description Formation Description Formation Description</p>
					<p className='card-text'>
						<span className='badge badge-primary mr-1'>#Category</span>
						<span className='badge badge-primary mr-1'>#Category</span>
						<span className='badge badge-primary mr-1'>#Category</span>
					</p>
					<button className='btn btn-outline-primary'>See more</button>
				</div>
			</div>
		</div>
	);
};

export default FormationCards;

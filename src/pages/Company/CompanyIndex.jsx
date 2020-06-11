import React from 'react';
// Components
import CompanyCards from '../../components/Company/CompanyCards';

const CompanyIndex = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>They trust us</p>
						<CompanyCards />
					</div>
				</div>
			</div>
		</section>	
	);
};

export default CompanyIndex;

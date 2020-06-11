import React from 'react';
// Components
import FormationCards from '../../components/Formation/FormationCards';

const FormationIndex = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>Formations</p>
						<FormationCards />
					</div>
				</div>
			</div>
		</section>	
	);
};

export default FormationIndex;

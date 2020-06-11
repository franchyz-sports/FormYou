import React from 'react';
// Components
import TeacherCards from '../../components/Teacher/TeacherCards';

const TeacherIndex = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>Our teachers</p>
						<TeacherCards />
					</div>
				</div>
			</div>
		</section>	
	);
};

export default TeacherIndex;

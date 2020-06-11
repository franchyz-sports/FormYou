import React from 'react';
// Components
import SessionSchedule from '../../components/Session/SessionSchedule';

const SessionIndex = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>Sessions</p>
						<SessionSchedule />
					</div>
				</div>
			</div>
		</section>	
	);
};

export default SessionIndex;

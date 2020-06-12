import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/formation_api.js';
// React Router DOM
import { useParams } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Components
import SessionDropdown from '../../components/Session/SessionDropdown';
import SessionSchedule from '../../components/Session/SessionSchedule';

const FormationShow = () => {
	const { formation_id } = useParams();
	const [data, setData] = useState([]);
	const userType = useSelector(state => state.authReducer.typeUser);

	const getData = () => {
		api.getFormation(formation_id)
		.then(response => setData(response.formation))
	};

	useEffect(getData, []);

	if (userType === 'student') {
		return (
			<section className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 mx-auto'>
							<p className='display-3'>{data.title}</p>
							<p>{data.description}</p>
							<p className='display-4 mt-3'>Next sessions</p>
							<SessionDropdown 
								formation_id={formation_id}
							/>
							<SessionSchedule
								formation_id={formation_id}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<section className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 mx-auto'>
							<p className='display-3'>{data.title}</p>
							<p>{data.description}</p>
							<p className='display-4 mt-3'>Next sessions</p>
							<SessionSchedule
								formation_id={formation_id}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	};
};

export default FormationShow;

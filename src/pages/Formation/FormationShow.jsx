import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/formation_api.js';
// React Router DOM
import { useParams } from 'react-router-dom';
// Components
import SessionSchedule from '../../components/Session/SessionSchedule';

const FormationShow = () => {
	const { formation_id } = useParams();
	const [data, setData] = useState([]);

	const getData = () => {
		api.getFormation(formation_id)
		.then(response => setData(response.formation))
	};

	// console.log(data);

	useEffect(getData, []);

	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>{data.title}</p>
						<p>Formation given by (Teacher + link to profile)</p>
						<p>{data.description}</p>
						<button type='button' className='btn btn-primary'>
							Category1 <span className='badge badge-light'>4</span>
						</button>
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

export default FormationShow;

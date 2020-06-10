import React, { useEffect, useState } from 'react';
// API
import * as api from '../services/formation_api.js';
// React Router DOM
import { Link } from 'react-router-dom';

const FormationCards = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getAllFormations()
		.then(response => {
			let formations = response.map((formation, key) => (
				<div className='card' key={key}>
					<div className='card-body'>
						<h5 className='card-title'>{formation.title}</h5>
						<p className='card-text'>Teacher (+ link to Teacher Profile)</p>
						<p className='card-text'>{formation.description}</p>
						<p className='card-text'>
							<span className='badge badge-primary mr-1'>#Category</span>
							<span className='badge badge-primary mr-1'>#Category</span>
							<span className='badge badge-primary mr-1'>#Category</span>
						</p>
						<Link to='/formation'><button className='btn btn-outline-primary'>Details</button></Link>
					</div>
				</div>
			));
			setData(formations);
		});
	};

	useEffect(getData, []);

	return (
		<div>
			<div className='card-columns'>
				{data}
			</div>
			<div className='text-center'>
				<Link to='/formations'><button className='btn btn-primary'>See more</button></Link>
			</div>
		</div>
	);
};

export default FormationCards;

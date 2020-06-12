import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/formation_api.js';
// React Router DOM
import { Link } from 'react-router-dom';

const FormationList = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getMyFormations()
		.then(response => {
			console.log(response)
			let formations = response.map((formation, key) => (
				<Link to={`/formation/${formation.id}`}><li classname='list-group-item' key={key}>{formation.title}</li></Link>
				
			));
			setData(formations);
		});
	};

	useEffect(getData, []);

	return (
		<ul classname='list-group list-group-flush'>
			{data}
		</ul>
	);
};

export default FormationList;

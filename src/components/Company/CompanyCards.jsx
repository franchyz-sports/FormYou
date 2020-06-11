import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/company_api.js';
// React Router DOM
import { Link } from 'react-router-dom';

const CompanyCards = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getAllCompanies()
		.then(response => {
			let companies = response.sort((a, b) => a.name.localeCompare(b.name)).map((company, key) => (
				<div className='card' key={key}>
					<img className='card-img-top' src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg' alt='Company' />
					<div className='card-body'>
						<Link to={`/company/${company.id}`}><h5 className='card-title'>{company.name}</h5></Link>
					</div>
				</div>
			));
			setData(companies);
		});
	};

	useEffect(getData, []);

	return (
		<div className='card-columns'>
			{data}
		</div>
	);
};

export default CompanyCards;

import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/formation_api.js';
// React Router DOM
import { Link } from 'react-router-dom';
// Moment
import moment from 'moment';

const FormationCards = () => {
	const [data, setData] = useState([]);
	const [showMore, setShowMore] = useState(false);

	const showHideBtn = () => {
		if (showMore === false) {
			return <button className='btn btn-primary' onClick={() => setShowMore(true)}>See more</button>
		} else {
			return <button className='btn btn-primary' onClick={() => setShowMore(false)}>Hide</button>
		};
	};

	const getData = () => {
		if (showMore === false) {
			api.getAllFormations()
			.then(response => {
				// console.log(response);
				let formations = response.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((formation, key) => (
					<div className='card' key={key}>
						<div className='card-body'>
							<h5 className='card-title'>{formation.formation.title}</h5>
							<p className='card-text'>{formation.formation.title} {formation.formation.title}</p>
							<p className='card-text'>{formation.formation.description}</p>
							<p className='card-text'>
								<span className='badge badge-primary mr-1'>#Category</span>
								<span className='badge badge-primary mr-1'>#Category</span>
								<span className='badge badge-primary mr-1'>#Category</span>
							</p>
							<Link to={`/formation/${key + 1}`}><button className='btn btn-outline-primary'>Details</button></Link>
						</div>
						<div className='card-footer'>
							<p className='card-text'><small className='text-muted'>Last updated {moment(formation.updated_at).fromNow()}</small></p>
						</div>
					</div>
				));
				setData(formations.slice(0, 3));
			});
		} else {
			api.getAllFormations()
			.then(response => {
				let formations = response.sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map((formation, key) => (
					<div className='card' key={key}>
						<div className='card-body'>
							<h5 className='card-title'>{formation.formation.title}</h5>
							<p className='card-text'>{formation.formation.title} {formation.formation.title}</p>
							<p className='card-text'>{formation.formation.description}</p>
							<p className='card-text'>
								<span className='badge badge-primary mr-1'>#Category</span>
								<span className='badge badge-primary mr-1'>#Category</span>
								<span className='badge badge-primary mr-1'>#Category</span>
							</p>
							<Link to={`/formation/${key + 1}`}><button className='btn btn-outline-primary'>Details</button></Link>
						</div>
						<div className='card-footer'>
							<p className='card-text'><small className='text-muted'>Last updated {moment(formation.updated_at).fromNow()}</small></p>
						</div>
					</div>
				));
				setData(formations);
			});
		};
	};

	useEffect(getData, [showMore]);

	return (
		<div>
			<div className='card-columns'>
				{data}
			</div>
			<div className='text-center'>
				{showHideBtn()}
			</div>
		</div>
	);
};

export default FormationCards;

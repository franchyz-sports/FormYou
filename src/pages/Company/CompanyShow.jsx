import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/company_api.js';
// React Router DOM
import { useParams } from 'react-router-dom';

const CompanyShow = () => {
	const { company_id } = useParams();
	const [data, setData] = useState([]);

	const getData = () => {
		api.getCompany(company_id)
		.then(response => setData(response))
	};

	useEffect(getData, []);

	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<div className='row'>
							<div className='col-lg-8 mx-auto'>
								<p className='display-3'>{data.name}</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare massa vitae luctus porttitor. Phasellus lobortis tellus sapien, vel maximus dolor hendrerit tempor. Nullam malesuada, risus eget semper laoreet, nunc sem mattis diam, eget condimentum est erat nec ipsum. In libero dolor, malesuada sed mollis sit amet, eleifend ac diam. Aenean at turpis posuere magna consequat auctor quis eget quam. Nunc nec egestas nisi. Suspendisse sem nisl, eleifend a posuere nec, hendrerit volutpat turpis.</p>
							</div>
							<div className='d-flex col-lg-4 col-md-8 align-items-center justify-content-center'>
								<img className='img-fluid rounded float-left' src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg' alt='Company' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>	
	);
};

export default CompanyShow;

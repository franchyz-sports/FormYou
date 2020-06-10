import React, { useEffect } from 'react';
// API
import * as api from '../../services/formation_api.js';
// React Router DOM
import { useParams } from 'react-router-dom';
// Components
import Schedule from '../../components/Schedule';

const FormationShow = () => {
	const { formation_id } = useParams();

	const getData = () => {
		api.getFormation(formation_id)
	};

	useEffect(getData, []);

	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-3'>Formation Title</p>
						<p>Formation given by (Teacher + link to profile)</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices nulla at lacus efficitur elementum. Nunc lacinia vulputate mollis. Proin faucibus, ipsum eget mattis facilisis, ex ipsum ornare erat, ac ullamcorper erat quam et arcu. Duis sit amet nunc interdum, iaculis lacus eget, pharetra purus. Nullam ultricies justo odio, id viverra eros venenatis et. Integer et eros est. Maecenas tincidunt dictum pharetra. Suspendisse id augue vitae metus dapibus pretium. (Formation Description)</p>
						<button type='button' className='btn btn-primary'>
							Category1 <span className='badge badge-light'>4</span>
						</button>
						<p className='display-4 mt-3'>Next sessions</p>
						<Schedule />
					</div>
				</div>
			</div>
		</section>	
	);
};

export default FormationShow;

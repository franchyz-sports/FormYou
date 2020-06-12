import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/session_api.js';

const SessionDropdown = ({ formation_id }) => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getFormationSessions(formation_id)
		.then(response => {
				console.log(response)
				let sessions = response.map((session, key) => (
					<option key={key} value={session.id}>{session.date}</option>
				));
			setData(sessions);
		});
	};

	useEffect(getData, []);

	const submit = (event) => {
		event.preventDefault();
		const session_id = document.getElementById('session_id').value
		api.joinSession(session_id)
		.then(response => console.log(response))
	};

	return (
		<form onSubmit={submit}>
			<div className='form-row'>
				<div className='form-group col-md-9'>
					<select id='session_id' className='form-control'>
						{data}
					</select>
				</div>
				<div className='form-group'>
					<button type='button' className='btn btn-primary' onClick={submit}>Confirm</button>
				</div>
			</div>
			
		</form>
	);
};

export default SessionDropdown;

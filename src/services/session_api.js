import Cookies from 'js-cookie';

export const getFormationSessions = (id) => {
	const data = {
		id: id
	};

	return fetch(`http://localhost:3000/formations/${data.id}/sessions.json`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

export const getMySessions = () => {
	return fetch('http://localhost:3000//mysessions.json', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': Cookies.get('token')
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

export const joinSession = (id) => {
	const data = {
		session_id: id
	};

	return fetch('http://localhost:3000/attendances.json', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': Cookies.get('token')
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
	.catch((error) => console.error('error:', error));
};

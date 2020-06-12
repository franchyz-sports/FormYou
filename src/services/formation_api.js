import Cookies from 'js-cookie';

export const getAllFormations = () => {

	return fetch('http://localhost:3000/formations.json', {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

export const getFormation = (id) => {
	const data = {
		id: id
	};

	return fetch(`http://localhost:3000/formations/${data.id}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

export const getMyFormations = () => {

	return fetch('http://localhost:3000//myformations.json', {
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


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
	.then(response => console.log(response))
};

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

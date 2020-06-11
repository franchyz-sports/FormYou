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

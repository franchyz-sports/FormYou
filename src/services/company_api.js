export const getAllCompanies = () => {
	return fetch('http://localhost:3000/companies.json', {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

export const getCompany = (id) => {
	const data = {
		id: id
	};

	return fetch(`http://localhost:3000/companies/${data.id}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

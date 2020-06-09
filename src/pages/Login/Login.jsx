import React from "react";

const Login = () => {
	return (
		<>
			<div>
				<form className="form p-4 mt-3 mb-3 col-sm-2 rounded">
					<div className="form-group row">
						<label htmlFor="email">Email address:</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							id="email"
						/>
					</div>
					<div className="form-group row">
						<label htmlFor="pwd">Password:</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							id="password"
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};
export default Login;

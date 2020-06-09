import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
	//const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		console.log(email);
		console.log(password);
	};
	return (
		<>
			<div>
				<form className="form p-4 mt-3 mb-3 col-sm-2 rounded" onSubmit={onSubmit}>
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
					<br />
					<Link to="/register">Don't have an account already? Register</Link>
					<br />
					<Link to="/register">Password forgotten?</Link>
				</form>
			</div>
		</>
	);
};
export default Login;

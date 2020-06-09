import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../styles/app.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import picture from "../../img/picture.jpg";
//import { registerUser } from "../Redux/users/usersActions";

const Register = () => {
	//const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		let password_confirmation = document.getElementById("password_confirmation")
			.value;
		let role = document.getElementById("role").value;

		let notice_password = "Please enter the same password";
		if (password !== password_confirmation) {
			document.getElementById("notice_password").innerHTML =
				"Please enter the same password";
		}
		//dispatch(registerUser(email, role, password));
		console.log(email);
		console.log(password);
		console.log(password_confirmation);
		console.log(role);

		if (role === "I am a FormYou teacher") {
			const dataTeacher = {
				teacher: {
					email: email,
					password: password,
					password_confirmation: password_confirmation,
				},
			};

			fetch("http://localhost:3000/teachers.json", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify(dataTeacher),
			})
				.then((response) =>
					response.json().then((json) => ({
						token: response.headers.get("Authorization").split(" ")[1],
						...json,
					}))
				)
				.then((response) => console.log(response));
		}

		// 	if (role === "I am a FormYou student") {
		// 		const dataStudent = {
		// 			student: {
		// 				email: email,
		// 				password: password,
		// 				password_confirmation: password_confirmation,
		// 			},
		// 		};

		// 		fetch("http://localhost:3000/students.json", {
		// 			method: "post",
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 			},

		// 			body: JSON.stringify(dataStudent),
		// 		})
		// 			.then((response) =>
		// 				response.json().then((json) => ({
		// 					token: response.headers.get("Authorization").split(" ")[1],
		// 					...json,
		// 				}))
		// 			)
		// 			.then((response) => console.log(response));
		// 	}

		// 	if (role === "I am a FormYou administrator") {
		// 		const dataAdmin = {
		// 			admins: {
		// 				email: email,
		// 				password: password,
		// 				password_confirmation: password_confirmation,
		// 			},
		// 		};

		// 		fetch("http://localhost:3000/admins.json", {
		// 			method: "post",
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 			},

		// 			body: JSON.stringify(dataAdmin),
		// 		})
		// 			.then((response) =>
		// 				response.json().then((json) => ({
		// 					token: response.headers.get("Authorization").split(" ")[1],
		// 					...json,
		// 				}))
		// 			)
		// 			.then((response) => console.log(response));
		// 	}
		// };
	};

	return (
		<>
			<div>
				<div className="center-card">
					<div className="container text-center my-4">
						<div className="flex-direction flex-row">
							<div className="col-lg-10 col-xl-9 mx-auto">
								<div className="card card-signin flex-row my-5">
									<div className="card-img-left d-none d-md-flex"></div>
									<div class="card-body">
										<form onSubmit={onSubmit}>
											<h2>Start learning and</h2>
											<h2>create an account</h2>
											<br />
											<Form>
												<Form.Group controlId="role">
													<Form.Label></Form.Label>
													<Form.Control as="select" custom>
														<option>I am a FormYou student</option>
														<option>I am a FormYou teacher</option>
														<option>I am a FormYou adminstrator</option>
													</Form.Control>
												</Form.Group>
											</Form>

											<div className="form-group row col-12">
												<label htmlFor="email">Email address:</label>
												<input
													type="email"
													className="form-control"
													placeholder="Enter email"
													id="email"
													required
												/>
											</div>

											<div className="form-group row col-12">
												<label htmlFor="pwd">Password:</label>
												<input
													type="password"
													className="form-control"
													placeholder="Enter password"
													id="password"
													required
												/>
											</div>

											<div className="form-group row col-12">
												<label htmlFor="pwd">Password confirmation:</label>
												<input
													type="password"
													className="form-control"
													placeholder="Enter password"
													id="password_confirmation"
													required
												/>
											</div>
											<p id="notice_password" className="redtext"></p>

											<button type="submit" className="btn btn-primary">
												Submit
											</button>
											<br />
											<br />
											<Link to="/login">Do you already have an account? Login</Link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;

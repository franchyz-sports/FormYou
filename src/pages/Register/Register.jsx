import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../styles/app.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { registerUser } from "../../redux/actions";
import { message } from "antd/es";

const Register = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		let role = document.getElementById("role").value;
		// console.log(email);
		// console.log(password);
		// console.log(passwordConfirm);
		// console.log(role);

		if (password !== passwordConfirm) {
			document.getElementById("notice_password").innerHTML =
				"Please enter the same password";
		}
		// dispatch(registerUser(email, password))
		// 	.then(() => {
		// 		message.success("You are well registered, you can now login !", 3);
		// 	})
		// 	.catch((err) => {
		// 		if (err.response) message.error(err.response.data.message, 3);
		// 		else message.error("Impossible to connnect to API", 3);
		// 	});

		if (role === "I am a FormYou teacher") {
			const dataTeacher = {
				teacher: {
					email: email,
					password: password,
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
									<div className="card-body">
										<form onSubmit={onSubmit}>
											<h2>Start learning and</h2>
											<h2>create an account</h2>
											<br />
											<Form>
												<Form.Group controlId="role">
													<Form.Label></Form.Label>
													<Form.Control
														as="select"
														custom
														// onSelect={(e) => setRole(e.target.value)}
														// value={role}
													>
														<option value="student">I am a FormYou student</option>
														<option value="teacher">I am a FormYou teacher</option>
														<option value="admin">I am a FormYou adminstrator</option>
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
													onChange={(e) => setEmail(e.target.value)}
													value={email}
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
													onChange={(e) => setPassword(e.target.value)}
													value={password}
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
													onChange={(e) => setPasswordConfirm(e.target.value)}
													value={passwordConfirm}
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

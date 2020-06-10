import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { loginUser } from "../../redux/actions";
import { message } from "antd/es";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(email);
		// console.log(password);

		dispatch(loginUser(email, password))
			.then(() => {
				message.success("You are well registered, you can now login !", 3);
			})
			.catch((err) => {
				if (err.response) message.error(err.response.data.message, 3);
				else message.error("Impossible to connnect to API", 3);
			});
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
											<h2>Login to your account</h2>
											<br />
											<Form>
												<Form.Group controlId="role">
													<Form.Label></Form.Label>
													<Form.Control as="select" custom>
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

											<button type="submit" className="btn btn-primary">
												Login
											</button>
											<br />
											<br />

											<Link to="/register">Don't have an account already? Register</Link>
											<br />
											<Link to="/register">Password forgotten?</Link>
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

export default Login;

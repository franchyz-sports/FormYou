import { Form } from "react-bootstrap";
import { message } from "antd/es";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from 'redux/middlewares/login'
import {useSelector, useDispatch} from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = () => {

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let type = document.getElementById('role').value

    dispatch(login(email, password, type))

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

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { logoutUser } from "../../redux/actions";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const NavBar = () => {
	const [keyword, setKeyword] = useState("");
	//const data = useSelector((store) => store.authReducers);
	//const dispatch = useDispatch();
	const history = useHistory();

	// useEffect(() => {
	// 	if (data.token === "") history.push("/login");
	// }, [data, history]);

	console.log(keyword);
	let current_user = "Otto";
	let current_user_url = "/login";

	const disconnect = () => {
		//dispatch(logoutUser());
		Cookies.remove("token");
		history.push("/login");
	};

	return (
		<Navbar bg="light" expand="lg">
			<Link to="/">
				<Navbar.Brand href="/">TacosWillFormYou</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title="Discover online courses" id="basic-nav-dropdown">
						<div>
							<NavDropdown.Item>
								<Link to="/login">Formations</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/register">Sessions</Link>
							</NavDropdown.Item>
						</div>
					</NavDropdown>
					<Form.Control
						className="mr-10"
						placeholder="Search formation"
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</Nav>

				<Nav>
					<Navbar.Text>
						Signed in as: <a href={current_user_url}>{current_user}</a>
					</Navbar.Text>
					<NavDropdown title="Connect" id="basic-nav-dropdown">
						<div>
							<NavDropdown.Item>
								<Link to="/login">Login</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/register">Register</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/register">Profile</Link>
							</NavDropdown.Item>
						</div>
					</NavDropdown>
				</Nav>
				<Button onClick={disconnect} className="ml-2" variant="outline-danger">
					Logout
				</Button>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavBar;

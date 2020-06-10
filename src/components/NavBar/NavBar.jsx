import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	Nav,
	NavDropdown,
	Button,
	Form,
	FormControl,
	Col,
	Row,
} from "react-bootstrap";

const NavBar = () => {
	const disconnect = () => {
		console.log("logout");
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
					{/* <Button className="ml-2" variant="outline-success">
						For companies
					</Button> */}

					<Form.Control className="mr-10" placeholder="Search formation" />
				</Nav>

				<Nav>
					<Navbar.Text>
						Signed in as: <a href="#login">Mark Otto</a>
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

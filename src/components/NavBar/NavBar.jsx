import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Link to="/">
				<Navbar.Brand>TacosWillFormYou</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>
						<Link to="/">Home</Link>
					</Nav.Link>
					<NavDropdown title="Connect" id="basic-nav-dropdown">
						<div>
							<NavDropdown.Item>
								<Link to="/login">Login</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/register">Register</Link>
							</NavDropdown.Item>
						</div>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavBar;

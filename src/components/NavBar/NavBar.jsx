import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
// import Cookies from "js-cookie";
// import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
// import { useSelector, useDispatch  } from "react-redux";

const NavBar = () => {
	// return (
	// 	<div className="topnav">
	// 		<Link to="/">Home</Link>
	// 		<Link to="/register">Register</Link>
	// 		<Link to="/login">Login</Link>
	// 	</div>
	// );

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

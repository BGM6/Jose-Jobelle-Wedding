import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
	return (
			<Navbar id="nav-background-color" collapseOnSelect expand="lg" variant="dark" >
				<LinkContainer to="/">
					<Navbar.Brand href="#home"><i className="fas fa-hashtag fa-2x"/>withLoveJose&Jobelle</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
					</Nav>
					<Nav>
						<NavDropdown title="Entourage" id="collapsible-nav-dropdown">
							{/*<NavDropdown.Item href="#action/3.1">Israel Hernandez</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.2">Bryan Guilas</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Kelvin Gagui</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Justin Lafrades</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Justine Naanep</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">David De Jesus</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.1">Beverly Guilas</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.2">Venisa Gagui</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Sheillah Gagui</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Guada Naanep</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Jenna Rae Green</NavDropdown.Item>*/}
							{/*<NavDropdown.Item href="#action/3.3">Stephanie Hernandez</NavDropdown.Item>*/}
							{/*<NavDropdown.Divider/>*/}
							<LinkContainer to="/groomsmen">
							<NavDropdown.Item>Groomsmen</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/bridesmaid">
							<NavDropdown.Item href="#action/3.4">Bridesmaid</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Item href="#action/3.4">The Parents</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Ring Bearers & Flower Girls</NavDropdown.Item>
						</NavDropdown>
						<LinkContainer to="/ourstory">
							<Nav.Link>Our Story</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/photos">
							<Nav.Link >Photos</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/gifts">
							<Nav.Link >Gifts</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/details">
							<Nav.Link >When/Where</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	);
};

export default Header;
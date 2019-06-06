import React, { Component } from 'react';
import {
    Navbar, NavbarBrand,
    Container, Row, Col,
} from 'reactstrap';
import "./navbar.css";
import logo from "./pics/logoPi.jpg";




class Header extends Component {
    render(){
	return (
	    <Navbar color="dark" className="navbar navbar-dark navbar2" id="header">
	      <Container>
		<Col xs="4">
		  <a href="/"><img src={logo} id="logoPi"/></a>
		</Col>
		<Col xs="8">
		  <Row className="titles">
		    <Col xs="12">
		      <NavbarBrand className="title" href="/">Laura Viglioni</NavbarBrand>
		    </Col>
		    <Col xs="12" >
		      <NavbarBrand className="subtitle" href="/">Teacher and Developer</NavbarBrand>
		    </Col>
		  </Row>
		</Col>
	      </Container>
	    </Navbar>
	);
    }
}

export default Header;


import React, { Component } from 'react';
import {
    Container, Row, Col,
    Button,
} from 'reactstrap';
import "./sidemenu.css";
import Blank from "./Blank";
import { Link } from "@reach/router";


class SideMenu extends Component {
    render(){
	return (
	    <Col xs="12" md="4" lg="3"  className="menu-lateral bg-dark">
	      <Link  to="/" className="btn btn-light col-6 col-md-12">Presentation</Link>
	      <Link  to="/aboutme" className="btn btn-primary col-6 col-md-12">About me</Link>
	      <Link to="/alanturing" className="btn btn-danger col-6 col-md-12"> Alan Turing Project </Link>
	      <Link to="/codes" className="btn btn-warning col-6 col-md-12"> Codes at Github </Link>
	      <Link to="/resume" className="btn btn-success col-6 col-md-12"> Resumé </Link>
	      <Link to="/contact" className="btn btn-info col-6 col-md-12"> Contact</Link>
	      <Blank height="10"/>
	    </Col>
	);
    }
}

export default SideMenu;

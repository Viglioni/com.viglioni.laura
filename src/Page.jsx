import React, { Component } from 'react';
import {
    Container, Row
} from 'reactstrap';
import SideMenu from './SideMenu';
import Presentation from "./Presentation";
import { Router, Link } from "@reach/router";
import Blank from "./Blank";
import AlanTuring from "./AlanTuring.jsx";
import Aboutme from "./Aboutme";
import Codes from "./Codes";
import Curriculo from "./Curriculo";
import ResumePDF from "./ResumePDF";
import Contato from "./Contato";

class Page extends Component {
  render() {
      return (
	  <Container fluid id="page">
	    <Row className="bg-dark no-gutters">
	      <SideMenu/>
	      <Router className="col-12 col-md-8 col-lg-8 col-xl-6"  id="router" style={{minHeight: "200px"}}>
		<Presentation path="/"/>
		<AlanTuring path="/alanturing"/>
		<Aboutme path="/aboutme"/>
		<Codes path="/codes"/>
		<Curriculo path="/resume"/>
		<ResumePDF path="/resumePDF"/>
		<Contato path="/contact"/>
	      </Router>
	    </Row>
	  </Container>
    );
  }
}

export default Page;

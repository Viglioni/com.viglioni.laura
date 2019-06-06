import React, {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import Blank from "./Blank";
import { FaFacebookSquare, FaEnvelope, FaTwitter, FaFile, FaMapMarkerAlt } from 'react-icons/fa';
import { Router, Link } from "@reach/router";


var footer = {
    minHeight: "150px"
};


class Footer extends Component {

    componentDidMount() {
	var header = document.getElementById("header").offsetHeight;
	var page = document.getElementById("page").offsetHeight;
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	height = height - page - header;
	console.log(height);
	document.getElementById("footer").style.minHeight = height + "px";
    };
    
    render(){

	
	
	return(
	    <Container fluid id="footer" className="bg-dark" style={footer}>
	      <Row>
		<Col xs="12">

		</Col>
	      </Row>
	      <Row>
		
		

		<Col xs="12" sm="6" lg="4" xl="2">
		  <FaFacebookSquare  style={{color: "#f8f9fa", verticalAlign: 'middle', height: "2em", marginRight: "0.5em"}}/>
		  <a className="small text-light lh-2" href="https://www.facebook.com/alanturingcampinas/">
		    Alan Turing 
		  </a>
		</Col>

		<Col xs="12" sm="6" lg="4" xl="2">
		  <FaEnvelope  style={{color: "#f8f9fa", verticalAlign: 'middle', height: "2em", marginRight: "0.5em"}}/>
		  <a className="small text-light lh-2" href="mailto:laura@viglioni.com">
		    laura@viglioni.com
		  </a>
		</Col>
		
		<Col xs="12" sm="6" lg="4" xl="2">
		  <FaTwitter  style={{color: "#f8f9fa", verticalAlign: 'middle', height: "2em", marginRight: "0.5em"}}/>
		  <a className="small text-light lh-2" href="https://www.twitter.com/viglionilaura">
		    Twitter
		  </a>
		</Col>

		<Col xs="12" sm="6" lg="4" xl="2">
		  <FaFile style={{color: "#f8f9fa", verticalAlign: 'middle', height: "2em", marginRight: "0.5em"}}/>
		  <Link className="small text-light lh-2" to="/resumePDF">
		    Resume in PDF
		  </Link>
		</Col>

		<Col xs="12" sm="6" lg="4" xl="4">
		  <FaMapMarkerAlt  style={{color: "#f8f9fa", verticalAlign: 'middle', height: "2em", marginRight: "0.5em"}}/>
		  <a className="small text-light lh-2" href="#">
		    Campinas, Sao Paulo, Brazil
		  </a>
		</Col>
		
	      </Row>
	      <Row>
		<Col xs="12">
		  <hr className="bg-light"/>
		  <p className="text-light text-center small">Created by Laura Viglioni, 2018©</p>
		</Col>
		
	      </Row>
	    </Container>
	);
    }
}

export default Footer;

import React, {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import Blank from "./Blank";
import { FaFacebookSquare, FaEnvelope, FaLinkedin, FaFile, FaMapMarkerAlt } from 'react-icons/fa';
import { Router, Link } from "@reach/router";
import ContactCard from "./Card";
import email from "./pics/email.jpg";
import facebook from "./pics/facebook.png";
import twitter from "./pics/twitter.png";
import github from "./pics/github.png";

const cardsText = [
    {
	title:"E-mail",
	subtitle: <a href="mailto:laura@viglioni.com">laura@viglioni.com</a> ,
	src: email
    },
    {
	title:<a href="https://www.alanturing.xyz" className="text-left"> Alan Turing Apoio e Aprofundamento Escolar</a>,
	subtitle :<a href="https://www.facebook.com/alanturingcampinas/" className=""> Facebook Page</a>,
	src: facebook
    },
     {
	title:"Laura @ GitHub",
	subtitle :<a href="https://www.github.com/viglioni/" className=""> GitHub profile</a>,
	src: github
    },
    {
	title:"Laura @ Twitter",
	subtitle :<a href="https://www.twitter.com/ViglioniLaura" className=""> Twitter Account</a>,
	src: twitter
    },
    
    
];

const cards = cardsText.map( x => <ContactCard className="col-12 col-sm-6  col-xl-3 mt-2 p-1" title={x.title} subtitle={x.subtitle} src={x.src} />);

class Contato extends Component {

    componentDidMount(){
	// get biggest card-body in height
	var height = Math.max.apply(null, Array.from(document.getElementsByClassName("card-body")).map( x => x.offsetHeight));

	// aplly that value for all cards
	Array.from(document.getElementsByClassName("card-body")).map(x => x.style.height = height + "px");
	
	
    }
    
    render(){
	return(
	    <Row  className="" style={{margin:"0 10px"}} id="cards">
	      {cards}
	    </Row>
	);
    }
}

export default Contato;

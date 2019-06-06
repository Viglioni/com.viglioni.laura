import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import styled from 'styled-components';
import Laura from "./pics/laura.jpg";
import AT from "./pics/alan_turing_ae.png";

const b = styled.p`
text-font: bold;
`;

const i = styled.p`
text-font: italic;
`;

const Img = styled.img `
max-width: 50%;
max-height: 300px;
float: left;
margin: 0.5rem;
margin-left: 0;
`;

const Hr = styled.hr `

`;

class Aboutme extends Component {
    render(){
	return(
	    <Col xs="12" className="" style={{}}>	   
	      <p className="text-justify text-light">
		<b className="lead"> My name is </b> 
		<Img src={Laura} />
		Laura Viglioni. I attended a mathematics undergraduate program from 2010 to 2014 at University of Campinas (UNICAMP), Sao Paulo - Brazil and a Compuer Science one from 2015 to 2018. Nowadays I am getting my Master's Degree in Computer Science, also at UNICAMP.
		</p>
	      <p className="text-justify text-light">
		I am a math teacher and tutor with <i>vestibular (sort of Brazilian SAT tests) </i> experience. I tutor students from 11 years to college students. I also teach programming to kids, teenagers and adults. For more information access <a href="/alanturing" className="text-light"> Alan Turing Project tab</a>
	      </p>
	      <p className="text-justify text-light">
		I am web front-end dev, I make commercial and portfolio websites. I also develop games using <a href="https://phaser.io/phaser3" target="blanc">Phaser 3</a>.
		</p>
	      <p className="text-justify text-light">
		I'm academically interested in Theory of Computation, Cryptography, Graphs, Functional programming, Human-Computer interaction, Topology, Mathematical Analysis and Differential Geometry.
		</p>
	    </Col>
	);
    }
}


export default Aboutme;

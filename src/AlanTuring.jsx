import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import styled from 'styled-components';
import Alan from "./pics/alan_turing_1.jpg";
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

class AlanTuring extends Component {
    render(){
	return(
	    <Col xs="12" className="" style={{}}>	   
	      <p className="text-justify text-light">
		<b className="lead"><a href="alanturing.xyz" className="text-light">Alan Turing - Apoio e Aprofundamento Escolar </a></b> 
		<Img src={AT} />
		is a Start Up that aims to bring tutors of all subjects to the student who needs support with a fair price. The initiative was created by three UNICAMP (University of Campinas) students which saw in the market the opportunity to innovate the way of tutoring.
	      </p>
	      <p className="text-justify text-light">
		We have a team of teachers ready to help the student in need to prepare for <i>ENEM, vestibulares</i>  and scientific olympiads.
	      </p>
	      <p className="text-justify text-light">
		Our team has English teachers for individual or group classes and also has programming and calculus teachers.
	      </p>
	      <Hr className="bg-light"/>
	      <p className="text-justify text-light">
		<b className="lead">Alan Turing </b>
		<Img src={Alan} />
		(23/06/1912 - 07/06/1954) was a English computer scientist, mathematician, logician, cryptanalyst, philosopher, and theoretical biologist. Turing is known as "Father of Computer Science" because of his works in Artificial Intelligence - even though this name only coined after his death. During World War II, Turing worked with the British Government decrypting messages from Nazi Army. His success saved thousands of lives. Turing was was appointed an Officer of Order of the British Empire in 1946 and elected a Fellow of the Royal Society in 1951.
		<br/>
		In the year of 1952, due to his homosexuality - seen as a criminal offence in his times -, Turing was prosecuted and condemned to chemical castration, which lead him to suicide in 1954. In 2009 the British government made an official public apology on behalf of the British government for "the appalling way he was treated." Queen Elizabeth II granted him a posthumous pardon in 2013. 
	      </p>
	    </Col>
	);
    }
}


export default AlanTuring;

import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import styled from 'styled-components';
import Felipe from "./pics/felipe.png";
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
		<b className="lead"> Meu nome é </b> 
		<Img src={Felipe} />
		Felipe Viglioni e cursei Bacharelado em Matemática no período de 2010 a 2014 pela Universidade Estadual de Campinas, a UNICAMP, e atualmente estudo Ciência da Computação, também pela UNICAMP.
		</p>
		<p className="text-justify text-light">
		  Sou professor de Matemática com experiência em vestibular e materiais dos principais cursinhos de Campinas. Atendo alunos dos ensinos fundamental, médio e superior. Também dou aulas de programação para crianças, adolescentes e adultos. Para saber mais acesse a aba <a href="/alanturing" className="text-light"> Projeto Alan Turing</a>
	      </p>
	      <p className="text-justify text-light">
		Sou desenvolvedor <i>web front-end</i>, crio sites comerciais e portifólios.
		</p>
		<p className="text-justify text-light">
		Academicamente me interesso pelas áreas de Teoria da Computação, Grafos, Programação Funcional, Interação Humano-Computador, Topologia, Análise Matemática e Geometria Diferencial.
		</p>
	    </Col>
	);
    }
}


export default AlanTuring;

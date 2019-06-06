import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import styled from 'styled-components';


const b = styled.p`
text-font: bold;
`;

const i = styled.p`
text-font: italic;
`;

const Hr = styled.hr `

`;


class Matematica extends Component {
    render(){
	return(
	    <Col xs="12" className="" style={{marginTop:"10px"}}>
	      <Col xs="12" className=" bg-secondary p-3" style={{height: "60px"}} >
		<h3 className="text-light text-center lead"> Conheça <a href="/alanturing" className="text-white"> Alan Turing Apoio e Aprofundamento Escolar</a></h3>
	      </Col>
	      <Col xs="12" className="mt-4">
	      <ul>
		    <li className="text-light" > <p> Aulas individuais ou em grupo </p></li>
		    <li className="text-light"> <p> Aulas de reforço em todas as frentes de matemática para ensinos fundamental e médio; </p></li>
		    <li className="text-light"> <p> Aulas de aprofundamento em conteúdos que não fazem parte do currículo tradicional do ensino médio ou são abordados de maneira rasa, como números complexos, Teoria dos Conjuntos ou Cálculo Diferencial e Integral; </p> </li>
		    <li className="text-light"> <p> Aulas de Cálculo para universitários; </p> </li>
		    <li className="text-light"> <p> Aulas de reforço de física para ensino médio; </p> </li>
		    <li className="text-light"> <p> Aulas voltadas para Enem e vestibulares tradicionais; </p> </li>


	      </ul>
	      </Col>
	    </Col>
	);
    }
}


export default Matematica;

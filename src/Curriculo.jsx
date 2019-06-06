import React, { Component } from 'react';
import {
    Container, Row, Col,
    Button,
} from 'reactstrap';
import CollapseCard from "./CollapseCard";
import { Router, Link } from "@reach/router";
import pdf from "./LauraViglioniResume.pdf";
import Blank from "./Blank";

const button = {
    borderRadius: 0,
};

const sections = [
    {
	title: "Academic Background",
	body: (
	    <Col xs="12">
	      <p className="h4"> Computer Science - Master's Degree</p>
	      <ul>
		<li><p className="text-muted m-0 small">University of Campinas - UNICAMP</p></li>
		<li><p className="text-muted m-0 small">2019 - 2021</p></li>
	      </ul>
	      <hr/>
	      <p className="h4"> Computer Science - Undergraduation</p>
	      <ul>
		<li><p className="text-muted m-0 small">University of Campinas - UNICAMP</p></li>
		<li><p className="text-muted m-0 small">2015 - 12/2018</p></li>
	      </ul>
	      <hr/>
	      <p className="h4"> Mathematics - Undergraduation</p>
	      <ul>
		<li><p className="text-muted m-0 small">University of Campinas - UNICAMP</p></li>
		<li><p className="text-muted m-0 small">Uncompleted: 2010 - 2014 </p></li>
	      </ul>
		
	    </Col>
	)
    },
     {
	title: "Undergraduate Research",
	body: (
	    <Col xs="12">
	      <p className="h4"> Undergraduate Research - CNPQ PIBIC </p>
	      <p className="h5">A study about ePUB specification for designing acessible books</p>
	      <ul>
		<li><p className="text-muted m-0 small">Advisor: Prof. Dr. Maria C. C. Baranauskas</p></li>
		<li><p className="text-muted m-0 small">08/2016 - 07/2017</p></li>
		<li><p className="text-muted m-0 small">Keywords: HCI, e-book, acessibility, web-design, web-dev</p></li>
	      </ul>
	      <hr/>
	      <p className="h4"> Undergraduate Research - SAE UNICAMP </p>
	      <p className="h5">Applied modern analysis: Measure Theory, Fatou’s Lemma extention (Lieb & Brezis)</p>
	      <ul>
		<li><p className="text-muted m-0 small">Advisor: Prof. Dr. Olivaine Santana de Queiroz</p></li>
		<li><p className="text-muted m-0 small">03/2013 – 07/2013</p></li>
		<li><p className="text-muted m-0 small">Keywords: Mathematical Analysis, Lebesgue Integration, Measure Theory</p></li>
	      </ul>
	     
		
	    </Col>
	)
     },
    {
	title: "Professional Experience",
	body: (
	    <Col xs="12">

	      <p className="h4"> ClickIdeia - Internship </p>
	      <p className="h5">Front end and game developer</p>
	      <ul>
		<li><p className="text-muted m-0 small">Responsible for recriate old tools and activities made in flesh in new technology</p></li>
		<li><a href="http://www.clickideia.com.br/" className="text-muted m-0 small">www.clickideia.com.br/</a></li>
		<li><p className="text-muted m-0 small">10/2018 - nowadays</p></li>
		<li><p className="text-muted m-0 small">Keywords: ReactJS+ HTML5; Phaser3 (JavaScript)</p></li>
	      </ul>
	      <hr/>
	      
	      <p className="h4"> SOMOS Educação </p>
	      <p className="h5">Math Technical Reader</p>
	      <ul>
		<li><p className="text-muted m-0 small">Responsible for technical reading of SOMOS’ teaching material and exams</p></li>
		<li><a href="http://www.somoseducacao.com.br/en/" className="text-muted m-0 small">www.somoseducacao.com.br/en/</a></li>
		<li><p className="text-muted m-0 small">08/2018 - nowadays</p></li>
	      </ul>
	      <hr/>
	      
	      <p className="h4"> EMBRAPA </p>
	      <p className="h5"> Full geoprocessing assistant</p>
	      <ul>
		<li><a href="http://www.embrapa.br/en/international" className="text-muted m-0 small">Brazilian Agricultural Research Corporation – www.embrapa.br/en/international</a></li>
		<li><p className="text-muted m-0 small">Responsible for a WebGIS interface layout and for the web integration with geoprocessing data</p></li>
		<li><p className="text-muted m-0 small">05/2017 - 05/2018</p></li>
		<li><p className="text-muted m-0 small">Keywords: HTML5, CSS3, JavaScript (OpenLayers3), Bootstrap</p></li>
	      </ul>
	      <hr/>
	      <p className="h4"> OFICINA DO ESTUDANTE PRIVATE SCHOOL – internship </p>
	      <p className="h5">Math tutor and assistant professor</p>
	      <ul>
		<li><p className="text-muted m-0 small">Responsible for math classes in extra time, math tutoring and exams’ grading for high school students</p></li>
		<li><p className="text-muted m-0 small">03/2014 - 11/2015</p></li>
	      </ul>
	    </Col>
	)
    },
    {
	title: "Technical Knowlegde",
	body:(
	    <Col xs="12">
	      <p className="h4"> Programming Languages </p>
	      <p className="text-muted m-0 small">C, JavaScript, HTML5, CSS3, Bootstrap4, LaTeX</p>
	      <p className="h6">Advanced knowlegde</p>
	      <p className="text-muted m-0 small">Haskell,C++,Python,Bash</p>
	      <p className="h6">Intermediate knowlegde</p>
	      <p className="text-muted m-0 small">Git, MySQL, Java, ReactJS</p>
	      <p className="h6">Basic knowledge</p>
	      <p className="text-muted m-0 small">LISP, MIPS</p>
	      <p className="h6">Basic notions</p>
	      <hr/>

	      <p className="h4"> Operational Systems </p>
	      <p className="text-muted m-0 small">Linux and MacOS</p>
	      <p className="h6">Intermediate knowledge</p>
	      <hr/>

	      <p className="h4"> Office </p>
	      <p className="text-muted m-0 small">Excel</p>
	      <p className="h6">Advanced knowledge</p>
	      <p className="text-muted m-0 small">Word and PowerPoint</p>
	      <p className="h6">Intermediate knowledge</p>
	      
	      
	    </Col>
	)
    },
    {
	title: "Language skills",
	body: (
	    <Col xs="12">
	      <ul>
		<li><p className="text-muted m-0 small">Brazilian portuguese: native</p></li>
		<li><p className="text-muted m-0 small">English proficient</p></li>
		<li><p className="text-muted m-0 small">Russian: basic</p></li>
	      </ul>
	    </Col>
	)
    },
    
];

class Curriculo extends Component {
    
    render() {

	const rows = (sections.map( x => <CollapseCard title={x.title} body={x.body} uncollapsed={true} className="mt-1"/>));

	return (
	    <Col xs="12" style={{}} className="no-gutters">
	      <Blank height="10"/>
	      <Col xs="12" className="bg-light">
		<Link to="/resumePDF" className="btn col-12 col-sm-6" style={button}>See full resume in PDF</Link>
		<a href={pdf} className=" btn col-12 col-sm-6" style={button}> Download PDF</a>
	      </Col>

	      {rows}
	      
	      
	    </Col>
    );
  }
}

export default Curriculo;

import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "./LauraViglioniResume.pdf";
import {
    Container, Row, Col
} from 'reactstrap';
import Blank from "./Blank";


class ResumePDF extends Component {
    state = {
	numPages: null,
	pageNumber: 1,
    }
    
    onDocumentLoad = ({ numPages }) => {
	this.setState({ numPages });
    }
    
    render() {
	const { pageNumber, numPages } = this.state;

	var x = Array.from(new Array(numPages).keys());
	let pages = ( x.map( x => <Page pageNumber={x+1} className="col-12" renderMode="svg"/>));
	
	
	
	return (
	    <Col xs="12" style={{marginTop: "10px"}}>
	      <a href={pdf} className="btn col-12 bg-light" style={{height: "60px", borderRadius: 0, lineHeight:"3em"}}>Baixar PDF</a>
	      <Blank height="10"/>
              <Document
		file={pdf}
		onLoadSuccess={this.onDocumentLoad}
		className="col-12 p-0"
		renderMode="svg"
		>
		
		{pages}
		
              </Document>
	    </Col>
	);
    }
}

export default ResumePDF;

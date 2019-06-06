import React, {Component} from 'react';
import "./floatingbutton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronUp } from 'react-icons/fa';



class FloatingButton extends Component {
    constructor(){
	super();
	this.state = {show: false};
	this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
	window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
	window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
	var lastScrollY = window.scrollY;
	if(window.scrollY > 100)
	    this.setState({show: true});
	else
	    this.setState({show: false});
    }   
    
    render(){
	
	return(
	    this.state.show == true ? (
		<a ref={this.button} id="floatingbutton" href="#" className="bg-light">
		  <FaChevronUp style={{color: "black", height: "100%", width:"100%"}} />
	    </a>)
	    :
	    (	<div/>)
	);
    }
}

export default FloatingButton;

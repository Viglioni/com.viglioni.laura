import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Header  from './Header';
import Page from "./Page";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";

class App extends Component {
    render() {
	return (
	    <div className="bg-dark">
	      <Header />
	      <Page id="page"/>
	      <Footer id="footer"/>
	      <FloatingButton/>
	    </div>
	);
    }
}

export default App;

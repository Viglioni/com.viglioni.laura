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
	title: "Phaser 3 - Boilerplate with webpack",
	body: (
	    <Col xs="12">
	      <p className="h4"> Phaser 3 - Boilerplate</p>
	      <ul>
		<li><p className="text-muted m-0 small"> <a href="https://phaser.io/phaser3">Checkout Phaser 3</a></p></li>
		<li><a href="https://github.com/Viglioni/Phaser3-Boilerplate" className="m-0 small">Code @ github</a></li>
		<li><p className="text-muted m-0 small"> A Phaser 3 Project Template with Webpack.</p></li>
	      </ul>
	      <hr/>
	    </Col>
	)
    },
    {
	title: "Twitter Scripts (NodeJS)",
	body: (
	    <Col xs="12">
	      <p className="h4"> Follow up to 1000 people from another @'s followers list</p>
	      <ul>
		<li><p className="text-muted m-0 small">Must install NodeJS and <a href="https://github.com/ttezel/twit">Twit</a> lib </p></li>
		<li><a href="https://github.com/Viglioni/twitter_scripts/tree/master/scripts" className="m-0 small">Code @ github</a></li>
		<li><p className="text-muted m-0 small"> This script will follow up to 1000 people from a target's follower list</p></li>
	      </ul>
	      <hr/>
	      
	      <p className="h4"> Unfollow all</p>
	      <ul>
		<li><p className="text-muted m-0 small">Must install NodeJS and <a href="https://github.com/ttezel/twit">Twit</a> lib </p></li>
		<li><a href="https://github.com/Viglioni/twitter_scripts/tree/master/scripts" className="m-0 small">Code @ github</a></li>
		<li><p className="text-muted m-0 small"> This script will unfollow all the people that follow you, except ones you put in a friend list</p></li>
	      </ul>
	      <hr/>

	      <p className="h4"> Follow Back</p>
	      <ul>
		<li><p className="text-muted m-0 small">Must install NodeJS and <a href="https://github.com/ttezel/twit">Twit</a> lib </p></li>
		<li><a href="https://github.com/Viglioni/twitter_scripts/tree/master/scripts" className="m-0 small">Code @ github</a></li>
		<li><p className="text-muted m-0 small"> This script will follow back all the people that follow you, except ones you put in a "enemy" list</p></li>
	      </ul>
	      <hr/>

	      
	      <p className="h4"> Posting to twitter</p>
	      <ul>
		<li><p className="text-muted m-0 small">Must install NodeJS and <a href="https://github.com/ttezel/twit">Twit</a> lib </p></li>
		<li><a href="https://github.com/Viglioni/twitter_scripts/tree/master/scripts" className="m-0 small">Code @ github</a></li>
		<li><p className="text-muted m-0 small"> This script allows you to post tweets with text and (up to) four images. If the text is longer than 280, the script will automatically organize them in a thread</p></li>
	      </ul>
	      <hr/>
		
	    </Col>
	)
    },
    {
	title: "Makefile for C projects",
	body: (
	    <Col xs="12">
	      <p className="h4"> This makefile allows you to:</p>
	      <ul>
		
		<li><p className="text-muted m-0 small"> Create your project </p></li>
		<li><p className="text-muted m-0 small"> Compile your code no matter how many files it has</p></li>
		<li><p className="text-muted m-0 small"> Create .c and .h files and automatically including them into the main .h file of the project</p></li>
		<li><p className="text-muted m-0 small"> Add libraries into the main .h file</p></li>
		<li><p className="text-muted m-0 small"> Add functions into modules and automatically write its header in the module .h file</p></li>
	      </ul>		
		<p><a href="https://github.com/Viglioni/Makefiles" className="m-0 small">Code @ github</a></p>
	    </Col>
	)
    },
    
];

class Codes extends Component {
    
    render() {

	const rows = (sections.map( x => <CollapseCard title={x.title} body={x.body} uncollapsed={false} style={{marginTop: "10px"}}/>));

	return (
	    <Col xs="12" style={{}} className="no-gutters">


	      {rows}
	      
	      
	    </Col>
    );
  }
}

export default Codes;

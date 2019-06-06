import React, { Component } from 'react';
import {
    Container, Row, Col,
    Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,
} from 'reactstrap';
import styled from 'styled-components';
import wordCloud from "./pics/carousel/pic1.jpg";
import unicampTHE from "./pics/carousel/pic2.jpg";
// import apoioEM from "./pics/carousel/pic3.jpg";
// import vest from "./pics/carousel/pic4.jpg";
// import calc from "./pics/carousel/pic5.jpg";
import "./carousel.css";
import Blank from "./Blank";


const items = [
    {
	id: 1,
	altText: 'Slide 1',
	src: wordCloud
    },
    {
    	id: 2,
    	altText: 'Slide 2',
    	src: unicampTHE
    },
    // {
    // 	id: 3,
    // 	altText: 'Slide 3',
    // 	src: apoioEM
    // },
    // {
    // 	id: 4,
    // 	altText: 'Slide 3',
    // 	src: vest
    // },
    // {
    // 	id: 5,
    // 	altText: 'Slide 3',
    // 	src: calc
    // },
];


class Presentation extends Component {

    constructor(props) {
	super(props);
	this.state = { activeIndex: 0 };
	this.next = this.next.bind(this);
	this.previous = this.previous.bind(this);
	this.goToIndex = this.goToIndex.bind(this);
	this.onExiting = this.onExiting.bind(this);
	this.onExited = this.onExited.bind(this);
    }

    onExiting() {
	this.animating = true;
    }

    onExited() {
	this.animating = false;
    }

    next() {
	if (this.animating) return;
	const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
	this.setState({ activeIndex: nextIndex });
    }

    previous() {
	if (this.animating) return;
	const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
	this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
	if (this.animating) return;
	this.setState({ activeIndex: newIndex });
    }

    render(){

	const { activeIndex } = this.state;

	const slides = items.map((item) => {
	    return (
		<CarouselItem
		  id={item.id}
		  className="itemCar col-12 hmax "
		  tag="div"
		  key={item.id}
		  onExiting={this.onExiting}
		  onExited={this.onExited}
		  
		  >
		  <div id={item.id+1000}
		       className="col-12"
		       style={{background: `url(${item.src}) center no-repeat`,
			       height: "100%",
		       backgroundSize: "contain"}}/>
		</CarouselItem>
	    );
	});
	
	return (
	    <Col xs="12" className="bg-dark hmax">

	      <Carousel
		className="col-12 hmax"
		activeIndex={activeIndex}
		next={this.next}
		previous={this.previous}
		>
		<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
		{slides}
		<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
		<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
	    </Col>
	    
	);
    }
}

export default Presentation;

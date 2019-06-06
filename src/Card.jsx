import React from 'react';
import { Card, CardImg, CardText, CardBody,
	 CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const ContactCard = (props) => {
  return (
      <Col className={props.className}>
	<Card style={{borderRadius:0}}>
          <CardImg top width="100%" src={props.src} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContactCard;

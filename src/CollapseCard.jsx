import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Col, Row } from 'reactstrap';

const noRadius = {
    borderRadius: 0,

};


class CollapseCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: props.uncollapsed };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
	<Col xs="12" className={this.props.className} style={this.props.style}>
        <Button color="primary" onClick={this.toggle} style={noRadius}  className="col-12"> {this.props.title} </Button>
        <Collapse isOpen={this.state.collapse} className="col-12 p-0">
          <Card className="mt-1" style={noRadius}>
            <CardBody>
              {this.props.body}
            </CardBody>
          </Card>
        </Collapse>
      </Col>
    );
  }
}

export default CollapseCard;

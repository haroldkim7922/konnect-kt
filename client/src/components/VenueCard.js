import React from "react";
import {
  Card,
  //CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
  //Button
} from "reactstrap";

class VenueCard extends React.Component {
  render() {
    return (
      <Card>
        {/* <CardImg src> */}
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>{this.props.address}</CardSubtitle>
          <br />
          <CardSubtitle>{this.props.type}</CardSubtitle>
          <CardText>{this.props.url}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default VenueCard;

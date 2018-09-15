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
          <CardSubtitle>
            {this.props.address}
            <br /> {this.props.category}
          </CardSubtitle>

          <CardText>
            <a href={this.props.url} target="_blank">
              {this.props.url}
            </a>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default VenueCard;

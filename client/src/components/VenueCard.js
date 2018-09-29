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

function VenueCard(props) {
  return (
    <Card>
      {/* <CardImg src> */}
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>
          {props.address}
          <br /> {props.category}
        </CardSubtitle>

        <CardText>
          <a href={props.url} target="_blank">
            {props.url}
          </a>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default VenueCard;

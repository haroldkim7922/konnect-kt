import React from "react";
import {
  Card,
  //CardText,
  CardBody,
  CardTitle,
  //CardSubtitle,
  Button
} from "reactstrap";

class Form extends React.Component {
  state = {
    name: "",
    address: "",
    url: "",
    type: ""
  };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Venue</CardTitle>
          <Button>Add New</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Form;

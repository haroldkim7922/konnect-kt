import React from "react";
import {
  Card,
  CardText,
  CardBody,
  //CardTitle,
  //CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input
  //FormText
} from "reactstrap";
import { postVenue } from "../server";

class VenueForm extends React.Component {
  state = {
    name: "",
    address: "",
    url: "",
    category: ""
  };

  handleChange = e => {
    const key = e.target.name;
    const val = e.target.value;
    this.setState({
      [key]: val
    });
  };

  handleSubmit = () => {
    this.postNewVenue();
  };

  postNewVenue = () => {
    const { name, address, url, category } = this.state;
    const payload = {
      name: name,
      address: address,
      url: url,
      category: category
    };

    postVenue(payload)
      .then(response => {
        console.log("new venue has been added");
      })
      .catch(() => {
        console.log("there was an error");
      });
  };
  render() {
    return (
      <Card>
        <CardBody>
          <CardText>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Website</Label>
                <Input
                  type="url"
                  name="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Category</Label>
                <Input
                  type="select"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option value="">Select</option>
                  <option>Club</option>
                  <option>Lounge/Bar</option>
                  <option>Korean Bar</option>
                </Input>
              </FormGroup>
            </Form>
          </CardText>
          <Button onClick={this.handleSubmit}>Add New</Button>
        </CardBody>
      </Card>
    );
  }
}

export default VenueForm;

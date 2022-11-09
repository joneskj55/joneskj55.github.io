import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateVisitor extends Component {
  constructor(props) {
    super(props);

    this.createVisitorName = this.createVisitorName.bind(this);
    this.createVisitorEmail = this.createVisitorEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      date: new Date(),
    };
  }

  createVisitorName(e) {
    this.setState({ name: e.target.value });
  }

  createVisitorEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const visitorObject = {
      name: this.state.name,
      email: this.state.email,
      date: this.state.date,
    };
    axios
      .post("http://localhost:4000/visitors/create-visitor", visitorObject)
      .then((res) => console.log(res.data));
    this.setState({
      name: "",
      email: "",
      date: "",
    });

    // Redirect to Visitor List
    this.props.history.push("/visitor-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.createVisitorName}
              required
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.createVisitorEmail}
              required
            />
          </Form.Group>
          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Add Name
          </Button>
        </Form>
      </div>
    );
  }
}

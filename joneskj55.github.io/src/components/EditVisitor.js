import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditVisitor extends Component {
  constructor(props) {
    super(props);
    this.onChangeVisitorName = this.onChangeVisitorName.bind(this);
    this.onChangeVisitorEmail = this.onChangeVisitorEmail.bind(this);
    this.onChangeVisitorRollno = this.onChangeVisitorRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: "",
      email: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/visitors/edit-visitor/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeVisitorName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeVisitorEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const visitorObject = {
      name: this.state.name,
      email: this.state.email,
    };
    axios
      .put(
        "http://localhost:4000/visitors/update-visitor/" +
          this.props.match.params.id,
        visitorObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Visitor successfully updated");
      })
      .catch((error) => {
        console.log(error);
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
              onChange={this.onChangeVisitorName}
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeVisitorEmail}
            />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Update Visitor
          </Button>
        </Form>
      </div>
    );
  }
}

import React, { Component } from "react";
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
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.createVisitorName}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={this.state.email}
              onChange={this.createVisitorEmail}
              required
            />
          </label>
          <button>Add Name</button>
        </form>
      </div>
    );
  }
}

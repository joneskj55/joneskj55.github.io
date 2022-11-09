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
      <div className="grid h-screen place-items-center">
        <form onSubmit={this.onSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.createVisitorName}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.createVisitorEmail}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Name
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

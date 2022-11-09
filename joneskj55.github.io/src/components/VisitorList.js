import React, { Component } from "react";
import axios from "axios";
import VisitorTableRow from "./VisitorTableRow";

export default class VisitorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitors: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/visitors/")
      .then((res) => {
        this.setState({
          visitors: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.visitors.map((res, i) => {
      return <VisitorTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </table>
      </div>
    );
  }
}

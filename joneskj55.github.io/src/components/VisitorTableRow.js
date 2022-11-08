import React, { Component } from "react";

export default class VisitorTableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.date}</td>
      </tr>
    );
  }
}

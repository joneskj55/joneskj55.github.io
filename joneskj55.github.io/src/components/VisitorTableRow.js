import React, { Component } from "react";

export default class VisitorTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{new Date(this.props.obj.date).toLocaleString()}</td>
      </tr>
    );
  }
}

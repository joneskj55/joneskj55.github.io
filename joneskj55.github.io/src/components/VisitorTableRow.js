import React, { Component } from "react";

export default class VisitorTableRow extends Component {
  render() {
    return (
      <tr className="border py-1 hover:bg-gray-200">
        <td className="p-1 sm:p-4">{this.props.obj.name}</td>
        <td className="p-1 sm:p-4">{this.props.obj.email}</td>
        <td className="p-1 sm:p-4">
          {new Date(this.props.obj.date).toLocaleString()}
        </td>
      </tr>
    );
  }
}

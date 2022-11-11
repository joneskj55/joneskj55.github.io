import React, { Component } from "react";

export default class VisitorTableRow extends Component {
  render() {
    return (
      <tr className="border rounded py-1 hover:bg-gray-100">
        <td className="p-1 sm:p-4 font-mono">{this.props.obj.name}</td>
        <td className="p-1 sm:p-4 font-mono">{this.props.obj.email}</td>
        <td className="p-1 sm:p-4 font-mono">
          {new Date(this.props.obj.date).toLocaleString()}
        </td>
      </tr>
    );
  }
}

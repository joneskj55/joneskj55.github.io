import React, { Component } from "react";

export default class VisitorTableRow extends Component {
  render() {
    return (
      <tr className="overflow-hidden shadow rounded-lg py-1 lg:hover:bg-main-gray lg:hover:text-gray-900 font-thin">
        <td className="p-1 sm:p-4">{this.props.obj.name}</td>
        <td className="p-1 sm:p-4">{this.props.obj.email}</td>
        <td className="p-1 sm:p-4">
          {new Date(this.props.obj.date).toLocaleDateString()}
        </td>
      </tr>
    );
  }
}

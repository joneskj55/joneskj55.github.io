import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class VisitorTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteVisitor = this.deleteVisitor.bind(this);
  }

  deleteVisitor() {
    axios
      .delete(
        "http://localhost:4000/visitors/delete-visitor/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Visitor successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            className="edit-link"
            to={"/edit-visitor/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteVisitor} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

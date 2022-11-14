import React, { Component } from "react";
import axios from "axios";
import ProjectTile from "./ProjectTile";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      url: "",
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/projects")
      .then((res) => {
        this.setState({
          projects: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.projects.map((res, i) => {
      return <ProjectTile obj={res} key={i} />;
    });
  }

  render() {
    return (
      <main className="flex-grow mb-20 sm:m-2 md:m-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Projects</h1>
        <br />
        <p className="text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Personal, open-source, bootcamp & university projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-8">
          {this.DataTable()}
        </div>
      </main>
    );
  }
}

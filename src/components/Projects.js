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
      tech: [],
      year: "",
      deployed: [],
      repo: "",
      img: "",
      private: Boolean,
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://portfolio-backend-alpha-rouge.vercel.app/projects")
      .then((res) => {
        this.setState({
          projects: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  projectData() {
    return this.state.projects.map((res, i) => {
      return <ProjectTile obj={res} key={i} />;
    });
  }

  render() {
    return (
      <main className="flex-grow mb-20 m-2 md:m-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Projects</h1>
        <br />
        <p className="text-2xl md:text-3xl font-light text-center">
          Personal, open-source, bootcamp & university projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {this.projectData()}
        </div>
      </main>
    );
  }
}

import React, { Component } from "react";
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer className="flex flex-1 justify-center p-16 bg-black">
        <a href={"https://linkedin.com/in/joneskj55"} target={"_blank"}>
          {" "}
          <FaLinkedin className="text-5xl mr-8 hover:text-gray-400" />
        </a>
        <a href={"https://github.com/joneskj55"} target={"_blank"}>
          <FaGithub className="text-5xl mr-8 hover:text-gray-400" />
        </a>
        <a href={"https://dev.to/joneskj55"} target={"_blank"}>
          <FaDev className="text-5xl hover:text-gray-400" />
        </a>
      </footer>
    );
  }
}

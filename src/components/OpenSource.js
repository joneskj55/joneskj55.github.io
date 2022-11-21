import React, { Component } from "react";
import GitHubCal from "./GitHubCal";

export default class OpenSource extends Component {
  render() {
    return (
      <main className="flex-grow mb-20 m-2 md:m-16 md:pb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          Open Source
        </h1>
        <br />
        <p className="text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Recent open source activity.
        </p>
        <div className="flex flex-1 justify-center">
          <a
            href={"https://github.com/joneskj55"}
            target={"_blank"}
            rel="noreferrer"
          >
            <GitHubCal />
          </a>
        </div>
      </main>
    );
  }
}

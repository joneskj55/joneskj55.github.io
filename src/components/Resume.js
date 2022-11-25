import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <main className="flex-grow md:m-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Resume</h1>
        <br />
        <p className="text-2xl md:text-3xl font-light text-center">
          Professional & school experience.
        </p>
        <div className="flex justify-center pb-8 pt-10 md:pt-14">
          <img
            className="shadow-2xl"
            src={require("../images/resume.png")}
            alt="resume"
            height={1000}
            width={1000}
          />
        </div>
      </main>
    );
  }
}

export default Resume;

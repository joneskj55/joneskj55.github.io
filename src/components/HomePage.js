import React, { Component } from "react";
import Intro from "./Intro";
import Resume from "./Resume";
import OpenSource from "./OpenSource";
import Projects from "./Projects";
import SiteVisitor from "./SiteVisitor";
import ScrollToTop from "./ScrollToTop";

export default class HomePage extends Component {
  render() {
    return (
      <main className="flex-grow m-2 md:m-4">
        <Intro />
        <Resume />
        <OpenSource />
        <Projects />
        <SiteVisitor />
        <ScrollToTop />
      </main>
    );
  }
}

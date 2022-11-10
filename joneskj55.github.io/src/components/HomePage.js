import React, { Component } from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import Resume from "./Resume";
import Projects from "./Projects";
import SiteVisitor from "./SiteVisitor";
import OpenSource from "./OpenSource";

export default class HomePage extends Component {
  render() {
    return (
      <main className="flex-grow mb-20 m-2 md:m-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Hello 👋🏾</h1>
        <br />
        <p className="flex flex-1 justify-center text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Welcome to my <SiMongodb className="ml-4" /> <SiExpress />
          <SiReact /> <SiNodedotjs className="mr-4" /> stack site!
        </p>
        <p className="p-14 ">
          I'm Kevin Jones, Veteran & Software Engineer. This intentionally
          over-engineered site is designed to display my full-stack
          capabilities. This site was built using the MERN stack with Tailwind
          for styling. If you check out the links in the nav bar you will find
          my resume/ work history. The projects link will provide some examples
          of my work, all of which are live websites. If you click on the
          visitors link you can add your info to the table of visitors of this
          site. The front end of this app is built with React and Tailwind.
          Express and Node.js are used on the backend and MongoDB is the
          database used for storage. As you probably know, most of this stuff,
          specifically the links to projects and resume could have all been done
          through the client side. However, the goal of this site is to display
          full-stack capabilities. So please, poke around the site, check out my
          socials, and feel free to reach out!{" "}
        </p>
        <OpenSource />
        <Projects />
        <Resume />
        <SiteVisitor />
      </main>
    );
  }
}

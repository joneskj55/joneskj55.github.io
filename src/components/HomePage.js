import React, { Component } from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
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
        <p className="flex flex-1 justify-center sm:text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Welcome to my{" "}
          <span className="visible sm:hidden">&nbsp;MERN&nbsp;</span>
          <SiMongodb className="ml-4 hidden sm:block" />{" "}
          <SiExpress className="hidden sm:block" />
          <SiReact className="hidden sm:block" />{" "}
          <SiNodedotjs className="hidden sm:block" />{" "}
          <SiTailwindcss className="mr-4 hidden sm:block" /> stack site!
        </p>
        <p className="p-8 sm:p-14 font-light">
          I'm Kevin Jones, Veteran & Software Engineer. This intentionally
          over-engineered site is designed to display my full-stack
          capabilities. This site was built using the MERN stack with Tailwind
          for styling. If you check out the links in the nav bar or simply
          scroll down the page you will find my resume/ work history. The
          projects section will provide some examples of my work, all of which
          are live websites. The front end of this app is built with React and
          Tailwind. Express and Node.js are used on the backend and MongoDB is
          the database used for storage. As you probably know, most of this
          stuff, specifically the links to projects could have all been done
          through the client side. However, the goal of this site is to display
          full-stack capabilities. So please, poke around the site, check out my
          socials, add your name to the table in the visitors section, and feel
          free to reach out!{" "}
        </p>
        <OpenSource />
        <Projects />
        <Resume />
        <SiteVisitor />
      </main>
    );
  }
}

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
import { FiArrowUpCircle } from "react-icons/fi";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default class HomePage extends Component {
  render() {
    return (
      <main className="flex-grow m-2 md:m-4">
        <h1 className="flex justify-center text-5xl md:text-7xl font-bold text-center">
          Hello <span className="animate-waving-hand">👋🏾</span>
        </h1>
        <br />
        <p className="flex flex-1 justify-center sm:text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Welcome to my{" "}
          <span className="visible sm:hidden text-[#37a134]">
            &nbsp;MERN&nbsp;
          </span>
          <SiMongodb className="ml-4 hidden sm:block text-[#37a134]" />{" "}
          <SiExpress className="hidden sm:block text-[#37a134]" />
          <SiReact className="hidden sm:block text-[#37a134]" />{" "}
          <SiNodedotjs className="hidden sm:block text-[#37a134]" />{" "}
          <SiTailwindcss className="mr-4 hidden sm:block text-[#37a134]" />{" "}
          stack site!
        </p>
        <p className="pt-8 pb-8 m-2 sm:p-14 font-light">
          I'm Kevin Jones, Veteran & Software Engineer. This intentionally
          over-engineered site is designed to display my{" "}
          <span className="font-bold">full-stack</span> capabilities. This site
          was built using the MERN stack with{" "}
          <span className="font-bold">Tailwind</span> for styling.{" "}
          <span className="hidden lg:contents ">
            If you check out the links in the nav bar or simply scroll down the
            page you will find my resume/ work history.
          </span>{" "}
          The projects section will provide some examples of my work, all of
          which are live websites. The front end of this app is built with{" "}
          <span className="font-bold">React</span> and Tailwind.{" "}
          <span className="font-bold">Express</span> and{" "}
          <span className="font-bold">Node.js</span> are used on the backend and{" "}
          <span className="font-bold">MongoDB</span> is the database used for
          storage. As you probably know, most of this stuff, specifically the
          links to projects could have all been done through the client side.
          However, the goal of this site is to display full-stack capabilities.
          So please, poke around the site, check out my socials, add your name
          to the table in the visitors section, and feel free to reach out!{" "}
        </p>
        <Resume />
        <OpenSource />
        <Projects />
        <SiteVisitor />
        <div className="flex flex-1 justify-center lg:justify-end animate-bounce pt-6 lg:pt-0 hover:cursor-pointer">
          <FiArrowUpCircle size="3em" onClick={goToTop} />
        </div>
      </main>
    );
  }
}

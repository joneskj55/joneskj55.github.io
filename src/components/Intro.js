import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Intro() {
  return (
    <div>
      <h1 className="flex justify-center text-5xl md:text-7xl font-bold text-center">
        Hello <span className="animate-waving-hand">👋🏾</span>
      </h1>
      <br />
      <p className="flex flex-1 justify-center sm:text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
        Welcome to my <SiMongodb className="ml-1 sm:ml-4 text-resume-green" />{" "}
        <SiExpress />
        <SiReact /> <SiNodedotjs className=" text-resume-green" />{" "}
        <SiTailwindcss className="mr-1 sm:mr-4" /> stack site!
      </p>
      <p className="lg:text-lg pt-8 pb-8 m-2 sm:p-14 font-light">
        I'm Kevin Jones, Technologist & Software Engineer. This intentionally
        over-engineered site is designed to display my{" "}
        <span className="half-bg cursor-default">full-stack</span> capabilities.
        This site was built using the MERN stack with{" "}
        <span className="half-bg cursor-default">Tailwind</span> for styling. If
        you{" "}
        <span className="hidden lg:contents ">
          check out the links in the nav bar or simply{" "}
        </span>{" "}
        scroll down the page you will find my resume/ work history. The projects
        section will provide some examples of my work, all of which are live
        websites. The front end of this app is built with{" "}
        <span className="half-bg cursor-default">React</span> and Tailwind.{" "}
        <span className="half-bg cursor-default">Express</span> and{" "}
        <span className="half-bg cursor-default">Node.js</span> are used on the
        backend and <span className="half-bg cursor-default">MongoDB</span> is
        the database used for storage. As you probably know, most of this stuff,
        specifically the project data, could have all been handled on the client
        side. However, the goal of this site is to display full-stack
        capabilities. So please, poke around the site, check out my socials, add
        your name to the table in the visitors section, and feel free to reach
        out!{" "}
      </p>
    </div>
  );
}

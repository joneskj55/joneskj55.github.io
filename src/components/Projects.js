import React, { Component } from "react";
// import axios from "axios";
// import ProjectTile from "./ProjectTile";
import { BsBoxArrowUpRight } from "react-icons/bs";

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

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:4000/projects/")
  //     .then((res) => {
  //       this.setState({
  //         projects: res.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  //
  // DataTable() {
  //   return this.state.projects.map((res, i) => {
  //     return <ProjectTile obj={res} key={i} />;
  //   });
  // }

  render() {
    return (
      <main className="flex-grow mb-20 sm:m-2 md:m-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Projects</h1>
        <br />
        <p className="text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Personal, open-source, bootcamp & university projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-8">
          {/*{this.DataTable()}*/}
          <div className="hover:shadow-xl">
            <a
              href="https://jones-ems.herokuapp.com/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Employee Management
                  </div>
                  <p className="text-gray-400 text-base">
                    Full stack app that allows users to track employees. Users
                    can add employees to the list through a form with basic
                    information. Data is stored in MongoDB. Express & Node are
                    used for backend code. EJS is used for views. And the
                    styling was done using TailwindCSS. The site is hosted on
                    Heroku.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://bio-site-alpha.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Bio Site
                  </div>
                  <p className="text-gray-400 text-base">
                    This site was built for a friend of mine, the founder and
                    CEO of Dig Labs, Tara Zedayko. This site is an informational
                    tool for people who want to know more about Tara and Dig
                    Labs. This site was a university project built using HTML,
                    CCC, JavaScript & jQuery.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://what-to-eat-chi.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    What to Eat
                  </div>
                  <p className="text-gray-400 text-base">
                    What to eat is a fun app that I created due to an issue that
                    my wife and I always seemed to struggle with. Figuring out
                    what to eat. The site has breakfast lunch and dinner options
                    that are randomly selected with the push of a button. The
                    data is stored in a JSON file and the rest of the site was
                    built with HTML, CSS & JavaScript.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://bobs-computer-repair.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Bob's Computer Repair
                  </div>
                  <p className="text-gray-400 text-base">
                    Bob’s Computer Repair is a university project built using
                    Angular, TypeScript, TailwindCSS, SCSS & Angular Material.
                    The purpose of the site was to get familiar with the
                    framework. Essentially, users can choose services and print
                    out an invoice.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://house-of-gryffindor.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    JavaScript Quiz
                  </div>
                  <p className="text-gray-400 text-base">
                    This was a fun little quiz app built with a team of three
                    during university. It is basically a JavaScript quiz
                    application that asks 10 JS questions. In the end, users
                    will get a score on how they did on the quiz. This app was
                    built using Knockout.js, jQuery, JavaScript, CSS & HTML.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://github-stats-beta-swart.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    GitHub Stats
                  </div>
                  <p className="text-gray-400 text-base">
                    GitHub stats is an application that I built in order to get
                    familiar with the GitHub API. Users have the ability,
                    through this app, to submit a GitHub username and see a list
                    of repositories from said user. Tech used for this app
                    includes the GitHub API, TailwindCSS, JavaScript & HTML.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://gryffindor-bcrs.herokuapp.com"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    BCRS
                  </div>
                  <p className="text-gray-400 text-base">
                    This full-stack MEAN application was a university group
                    capstone project built using MongoDB, Express, Angular,
                    Node, Chart.js & PrimeNG. This app has several features.
                    Users with admin privileges will have a different experience
                    than users without them. Regular users will be able to
                    select services and print an invoice. Admins can alter data
                    and, through Chart.js, see stats on the most used services.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://gpa-calc-app.vercel.app/session/sign-in"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    GPA Calculator
                  </div>
                  <p className="text-gray-400 text-base">
                    This app was built in university while learning Angular.
                    Essentially the app has a few features. Users will have to
                    sign in (credentials are provided in-app), enter their
                    courses along with their grades and their GPA will be
                    calculated for them. Signout functionality is also included.
                    Tech used: Angular, TypeScript, Angular Material, CSS.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://in-n-out-books.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    In-N-Out Books
                  </div>
                  <p className="text-gray-400 text-base">
                    This simple Angular app built during university displays a
                    list of books using the Open Library API to fetch the data.
                    This site was built with Angular, TypeScript, SCSS & Angular
                    Material.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://jones-nodebucket.herokuapp.com/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Nodebucket
                  </div>
                  <p className="text-gray-400 text-base">
                    Nodebucket is a simple to-do list/ task organization type of
                    application. Users can create, read & delete tasks. This was
                    built using MongoDB, Express, Angular & Node.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://enterprise-composer-app.vercel.app/composer-list"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Composer App
                  </div>
                  <p className="text-gray-400 text-base">
                    This simple app was built during university while learning
                    Angular in order to display the advantages of DI and
                    Observables. Users will see a list of composers, click the
                    ID and see more info about the composer. Users can also use
                    the search function. Tech: Angular, TypeScript, Bootstrap,
                    CSS.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://simple-simon.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Simple Simon
                  </div>
                  <p className="text-gray-400 text-base">
                    This fun app was built during my coding boot camp back in
                    2016. It is a variation on the Simon memorization game from
                    back in the day! Super fun, check it out! Built using
                    JavaScript, jQuery, CSS & HTML.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="hover:shadow-xl">
            <a
              href="https://weather-map-six.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              className="hover:shadow-xl"
            >
              <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                      <BsBoxArrowUpRight />
                    </span>
                    Weather Map
                  </div>
                  <p className="text-gray-400 text-base">
                    This application was built during my 2016 boot camp. Through
                    this app, users can place a pin anywhere on earth and get a
                    3-day forecast. Tech used to build this app includes Google
                    Maps, JavaScript, jQuery, HTML, CSS & Open Weather Map.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

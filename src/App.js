import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SiteVisitor from "./components/SiteVisitor";
import HomePage from "./components/HomePage";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-dope">
      <Router>
        <header className="lg:sticky top-0 z-50">
          <nav className="mx-auto p-5 flex justify-evenly sm:justify-between py-4 px-6 bg-slate-900 shadow-2xl sm:items-baseline w-full mb-14">
            <div>
              <Link
                to={"/"}
                className="text-base sm:text-2xl no-underline hover:text-gray-500"
              >
                <img
                  src={require("./images/king-lion.png")}
                  alt="Kevin Jones"
                  height={120}
                  width={120}
                />
              </Link>
            </div>
            <div className="flex flex-row">
              <Link
                to={"/resume"}
                className="pr-5 text-sm sm:text-lg hover:text-gray-500 invisible lg:visible"
              >
                Resume
              </Link>
              <Link
                to={"/projects"}
                className="pr-5 text-sm sm:text-lg hover:text-gray-500 invisible lg:visible"
              >
                Projects
              </Link>
              <Link
                to={"/visitors"}
                className="text-sm sm:text-lg hover:text-gray-500 invisible lg:visible"
              >
                Visitors
              </Link>
            </div>
          </nav>
        </header>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <HomePage {...props} />}
            />
            <Route
              exact
              path="/resume"
              component={(props) => <Resume {...props} />}
            />
            <Route
              exact
              path="/projects"
              component={(props) => <Projects {...props} />}
            />
            <Route
              exact
              path="/visitors"
              component={(props) => <SiteVisitor {...props} />}
            />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

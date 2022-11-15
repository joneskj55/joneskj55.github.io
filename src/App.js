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
    <div className="font-mono">
      <Router>
        <header>
          <nav className="sticky top-0 mx-auto p-5 flex sm:justify-between py-4 px-6 bg-gray-200 shadow sm:items-baseline w-full mb-14">
            <div>
              <Link
                to={"/"}
                className="text-base text-2xl text-gray-600 no-underline hover:text-gray-500"
              >
                Kevin Jones
              </Link>
            </div>
            <div className="flex flex-row">
              <Link
                to={"/resume"}
                className="pr-5 text-sm text-lg text-gray-600 hover:text-gray-500 invisible lg:visible"
              >
                Resume
              </Link>
              <Link
                to={"/projects"}
                className="pr-5 text-sm text-lg text-gray-600 hover:text-gray-500"
              >
                Projects
              </Link>
              <Link
                to={"/visitors"}
                className="pr-5 text-sm text-lg text-gray-600 hover:text-gray-500"
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

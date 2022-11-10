import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SiteVisitor from "./components/SiteVisitor";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="font-mono">
      <Router>
        <header>
          <nav className="sticky top-0 mx-auto p-5 flex justify-between py-4 px-6 bg-gray-200 shadow sm:items-baseline w-full mb-14">
            <div>
              <Link
                to={"/"}
                className="text-2xl text-gray-600 no-underline hover:text-gray-500"
              >
                Kevin Jones
              </Link>
            </div>

            <ul className="flex flex-row">
              <Link
                to={"/create-visitor"}
                className="pr-5 text-lg text-gray-600 hover:text-gray-500"
              >
                Site Visitors
              </Link>
            </ul>
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
              path="/create-visitor"
              component={(props) => <SiteVisitor {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

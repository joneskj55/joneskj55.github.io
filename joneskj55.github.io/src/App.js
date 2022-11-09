import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateVisitor from "./components/CreateVisitor";
import VisitorList from "./components/VisitorList";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Router>
        <header>
          <nav className="sticky top-0 mx-auto p-5 font-sans flex justify-between py-4 px-6 bg-green-800 shadow sm:items-baseline w-full mb-14">
            <div>
              <Link
                to={"/"}
                className="text-2xl no-underline text-white hover:text-gray-300"
              >
                Kevin Jones
              </Link>
            </div>

            <ul className="flex flex-row">
              <Link
                to={"/create-visitor"}
                className="pr-5 text-lg no-underline text-white hover:text-gray-300"
              >
                Create Visitor
              </Link>

              <Link
                to={"/visitor-list"}
                className="pr-5 text-lg no-underline text-white hover:text-gray-300"
              >
                Visitor List
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
              component={(props) => <CreateVisitor {...props} />}
            />
            <Route
              exact
              path="/visitor-list"
              component={(props) => <VisitorList {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

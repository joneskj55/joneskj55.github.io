import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateVisitor from "./components/CreateVisitor";
import VisitorList from "./components/VisitorList";

function App() {
  return (
    <div>
      <Router>
        <header>
          <nav>
            <nav>
              <Link to={"/create-visitor"} className="nav-link">
                React MERN Stack App
              </Link>
            </nav>
            <nav>
              <nav>
                <Link to={"/create-visitor"} className="nav-link">
                  Create Visitor
                </Link>
              </nav>
              <nav>
                <Link to={"/visitor-list"} className="nav-link">
                  Visitor List
                </Link>
              </nav>
            </nav>
          </nav>
        </header>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <CreateVisitor {...props} />}
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

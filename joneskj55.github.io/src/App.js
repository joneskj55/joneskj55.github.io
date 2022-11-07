import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateContent from "./components/CreateContent";
import EditContent from "./components/EditContent";
import ContentList from "./components/ContentList";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
            <Link to={"/create-content"} className="nav-link">
              React MERN Stack App
            </Link>

            <nav className="justify-content-end">
              <nav>
                <Link to={"/create-content"} className="nav-link">
                  Create Content
                </Link>
              </nav>
              <nav>
                <Link to={"/content-list"} className="nav-link">
                  Content List
                </Link>
              </nav>
            </nav>
          </nav>
        </header>

        <div className="wrapper">
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <CreateContent {...props} />}
            />
            <Route
              exact
              path="/create-content"
              component={(props) => <CreateContent {...props} />}
            />
            <Route
              exact
              path="/edit-content/:id"
              component={(props) => <EditContent {...props} />}
            />
            <Route
              exact
              path="/content-list"
              component={(props) => <ContentList {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

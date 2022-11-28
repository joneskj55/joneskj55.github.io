import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import SiteVisitor from "./components/SiteVisitor";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="font-dope lg:font-jetbrains bg-gradient-to-tr from-[#082338] via-[#000000] to-[#082338]">
      <Router>
        <Nav />
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
            <Route path="*" component={(props) => <NotFound {...props} />} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

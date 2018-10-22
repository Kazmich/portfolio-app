import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import Gallery from "./Gallery";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <img
            className="main-logo"
            src="/images/main-logo.png"
            alt="Strona główna"
          />
          <ul className="menu-bar">
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/gallery">Galeria</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
          <div className="container">
            <Route exact path="/" component={MainPage} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

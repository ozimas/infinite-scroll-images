import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites"

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark p-3 mb-4">
          <div className="container justify-content-center">
            <Link className="mr-2" to="/"><button type="button" className="btn btn-outline-warning">Home</button></Link>
            <Link to="/favorites"><button type="button" className="btn btn-outline-warning">Favorites</button></Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}
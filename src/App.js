import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/addEvent">Add Event</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/event">
            <Event/>
          </Route>
          <Route path="/addEvent">
            <AddEvent/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

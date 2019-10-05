import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="full-app">
        <Link to="/login">Login</Link> &nbsp;&nbsp;&nbsp;
        <Link to="/friendlist">Friend List</Link>
      </div>

      <Switch>
        <PrivateRoute exact path="/friendlist" component={FriendList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  FormPropsTextFields from './Login&Register'
import PrimarySearchAppBar from "./Navbar"
import Home from "./Home"
import AdminLogin from "./AdminLogin";

export default function BasicExample() {
  return (
    <Router>
      <div>

            <Link to="/"></Link>

            <Link to="/about"></Link>

            <Link to="/dashboard"></Link>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
                 <PrimarySearchAppBar/>
          </Route>
          <Route path="/dashboard">
          <FormPropsTextFields/>
          </Route>
          <Route path="/adminlogin">
          <AdminLogin/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
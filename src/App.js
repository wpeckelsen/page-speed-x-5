import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavigationBar/NavBar";

import React, { useContext } from "react";

import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Improvements from "./pages/Improvements/Improvements";
import Input from "./pages/Input/Input";
import Location from "./pages/Location/Location";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Results from "./pages/Results/Results";
import Signup from "./pages/Signup/Signup";

import {AuthContext} from "./context/AuthContext";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/account">
          {auth ? <Account /> : <Redirect to="/login" />}
        </Route>

        <Route path="/improvements">
          {auth ? <Improvements /> : <Redirect to="/login" />}
        </Route>

        <Route path="/input">
          {auth ? <Input /> : <Redirect to="/login" />}
        </Route>

        <Route path="/location">
          {auth ? <Location /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login/>

        </Route>

        <Route path="/404">
          <PageNotFound />
        </Route>

        <Route path="/results">
          {auth ? <Results /> : <Redirect to="/login" />}
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

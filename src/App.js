import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import NavBar from "./components/NavigationBar/NavBar";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Improvements from "./pages/Improvements/Improvements";
import Input from "./pages/Input/Input";
import Location from "./pages/Location/Location";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Results from "./pages/Results/Results";
import Signup from "./pages/Signup/Signup";

import { AuthContext } from "./context/AuthContext";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/account">
          {auth ? <Account /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/improvements">
          {auth ? <Improvements /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/input">
          {auth ? <Input /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/location">
          {auth ? <Location /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/404">
          <PageNotFound />
        </Route>

        <Route exact path="/results">
          {auth ? <Results /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;

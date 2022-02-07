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
import { AuthContext } from "./context/AuthContext";



function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/account">
            {/*{isAuth ? <Account /> : <Redirect to="/login" />}*/}
          <Account />
        </Route>

        <Route path="/improvements">
          {/*{isAuth ? <Improvements /> : <Redirect to="/login" />}*/}
          <Improvements />
        </Route>

        <Route path="/input">
        {/*{isAuth ? <Input /> : <Redirect to="/login" />}*/}
          <Input />
        </Route>

        <Route path="/location">
          {/*{isAuth ? <Location /> : <Redirect to="/login" />}*/}
          <Location />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/404">
          <PageNotFound />
        </Route>

        <Route path="/results">
          {/*{isAuth ? <Results/> : <Redirect to="/login" />}*/}
          <Results/>
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

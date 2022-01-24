import logo from "./logo.svg";
import "./App.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import NavBar from "./components/NavigationBar/NavBar";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Improvements from "./pages/Improvements/Improvements";
import InputDomain from "./pages/InputDomain/InputDomain";
import Location from "./pages/Location/Location";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Results from "./pages/Results/Results";
import Signup from "./pages/Signup/Signup";


function App() {
  return (
    <Router>
        <NavBar/>

        <Switch>

            <Route exact path="/">
            <Home/>
            </Route>




            <Route path="/account">
            <Account/>
            </Route>

            <Route path="/improvements">
            <Improvements/>
        </Route>

            <Route path="/input-domain">
            <InputDomain/>
    </Route>

            <Route path="/location">
            <Location/>
</Route>

            <Route path="/login">
            <Login/>
</Route>

            <Route path="/404">
            <PageNotFound/>
</Route>

            <Route path="/results">
            <Results/>
</Route>


            <Route path="/signup">
            <Signup/>
</Route>


            <Route path="*">
                <PageNotFound/>
            </Route>

        </Switch>

    </Router>
  );
}

export default App;

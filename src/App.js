import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/Button/Button";
import NavBar from "./components/NavigationBar/NavBar";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import InputDomain from "./pages/InputDomain/InputDomain";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Form from "./components/Form/Form";
import PageCard from "./components/PageCard/PageCard";
import Signup from "./pages/Signup/Signup";
import Results from "./pages/Results/Results";
import Location from "./pages/Location/Location";
import Account from "./pages/Account/Account";

function App() {
  return (
    <>

<NavBar/>


        <Home/>
        <Account/>


<Login/>

<InputDomain/>

        <Signup/>

<Results/>


        <Location/>

    </>
  );
}

export default App;

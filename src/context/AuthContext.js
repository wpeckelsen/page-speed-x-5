import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import isTokenValid from "../helpers/isTokenValid";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const history = useHistory();

  const [auth, toggleAuth] = useState({
    auth: false,
    status: "pending",
    user: null,
  });

  useEffect(() => {
    // haal de JWT op uit Local Storage
    const accessToken = localStorage.getItem("accessToken");


    // als er WEL een token is, haal dan opnieuw de gebruikersdata op
    if (accessToken && isTokenValid(accessToken)) {
      const decoded = jwt_decode(accessToken);
      userFetch(decoded.sub, accessToken);
    } else {
      // als er GEEN accessToken is doen we niks, en zetten we de status op 'done'
      toggleAuth({
        auth: false,
        status: "done",
        user: null,
      });
    }
  }, []);

  function login(JWT) {
    localStorage.setItem("accessToken", JWT);
    const decoded = jwt_decode(JWT);
    userFetch(decoded.sub, JWT, "/account");
    console.log("User Logged In. message from authcontext");
  }

  function logout() {
    history.push("/");
    localStorage.removeItem('accessToken')
    toggleAuth({
      auth: false,
      status: "done",
      user: null,
    });
    console.log("User Logged Out");
  }

  // Omdat we deze functie in login- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
  async function userFetch(id, accessToken, redirectUrl) {
    try {
      // haal gebruikersdata op met de accessToken en id van de gebruiker
      const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        }
          ,
      });

      console.log(result)

      // zet de gegevens in de state
      toggleAuth({
        ...auth,
        auth: true,
        status: "done",
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
      });

      // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
      // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
      if (redirectUrl) {
        history.push(redirectUrl);
      }
    } catch (e) {
      console.error(e);
      // ging er iets mis? Plaatsen we geen data in de state
      toggleAuth({
        auth: false,
        status: "done",
        user: null,
      });
    }
  }

  const data = {
    auth: auth.auth,
    user: auth.user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={data}>
      {auth.status === "done" ? children : <p><b>Loading...</b></p>}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

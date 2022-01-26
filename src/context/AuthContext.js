import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextFunction({ children }) {

  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();

  function login() {
    setIsAuth(true);
    console.log("Gebruiker is ingelogd!");
    history.push("/account");
  }

  function logout() {
    setIsAuth(false);
    console.log("Gebruiker is uitgelogd!");
    history.push("/");
  }

  const data = {
    isAuth: isAuth,
    setIsAuth: setIsAuth,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthContextFunction;

import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({});


function AuthContextFunction({ children }) {


  const [auth, toggleAuth] = useState({
    isAuth: false,
    user: null,
  });




  function login(jwtToken) {
    toggleAuth({
      ...auth,
      isAuth: true,
    });
    console.log("User Logged In");
    history.push("/account");
  }




  function logout() {
    toggleAuth({
      ...auth,
      isAuth: false,
    });
    console.log("User Logged Out");
    history.push("/");
  }




  const history = useHistory();
  const data = {
    auth,
    toggleAuth,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthContextFunction;

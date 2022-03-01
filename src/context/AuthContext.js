import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
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
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken && isTokenValid(accessToken)) {
      const decoded = jwt_decode(accessToken);
      userFetch(decoded.sub, accessToken);
    } else {
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
    localStorage.removeItem("accessToken");
    toggleAuth({
      auth: false,
      status: "done",
      user: null,
    });
    console.log("User Logged Out");
  }



  async function userFetch(id, accessToken, redirectUrl) {
    try {
      const result = await axios.get(
        `https://frontend-educational-backend.herokuapp.com/api/user`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(result);

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

      if (redirectUrl) {
        history.push(redirectUrl);
      }
    } catch (e) {
      console.error(e);

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
      {auth.status === "done" ? (
        children
      ) : (
        <p>
          <b>Loading...</b>
        </p>
      )}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

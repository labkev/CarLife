import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
  const [login, SetLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? SetLogin(false) : SetLogin(true);
      // console.log(user);
    });
  }, []);

  if(login === null) return <Loading isVisible={true} text="Cargando..."/>;

  return login ? <UserLogged/> : <UserGuest/>
}

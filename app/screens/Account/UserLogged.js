import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as firebase from "firebase";
import Home from "../Home";

export default function UserLogged() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user);
    })();
  }, []);

  return <View>{userInfo && <Home userInfo={userInfo} />}</View>;
}

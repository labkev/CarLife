import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from "firebase";
import Loading from "../components/Loading";
//import LoginStart from "../screens/Account/LoginStart";
import StartAppStack from "../navigations/StartAppStack"
import Navigation from "../navigations/Navigation";



export default function StartApp() {
    const Stack = createStackNavigator();
  const [login, SetLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? SetLogin(false) : SetLogin(true);
      console.log(user);
    });
  }, []);

  if(login === null) return <Loading isVisible={true} text="Cargando..."/>;

  const Auth = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="startAppStack">
          <Stack.Screen
              name="startAppStack"
              component={StartAppStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
  };

  return login ? <Navigation/> : <Auth/>
  

}
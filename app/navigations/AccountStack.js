import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";
import AddVehiculo from "../screens/Home/AddVehiculo";
import Notification from "../components/Notification";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{
          title: "CarLife",
          headerRight: () => (
            <Notification></Notification>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar sesión" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      /> 
      <Stack.Screen
        name="addVehiculo"
        component={AddVehiculo}
        options={{ title: "Nuevo Vehiculo" }}
      />
    </Stack.Navigator>
  );
}

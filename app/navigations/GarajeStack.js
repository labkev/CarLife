import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Garaje from "../screens/Garaje";
import AddVehiculo from "../screens/Home/AddVehiculo";
import Notification from "../components/Notification";

const Stack = createStackNavigator();

export default function GarajeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="garajeStack"
        component={Garaje}
        options={{
          title: "Garaje",
          headerRight: () => <Notification></Notification>,
        }}
      />
      <Stack.Screen
        name="addVehiculoByGaraje"
        component={AddVehiculo}
        options={{ title: "Nuevo Vehiculo" }}
      />
    </Stack.Navigator>
  );
}

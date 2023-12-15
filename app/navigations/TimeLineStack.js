import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TimeLine from "../screens/TimeLine";
import AddVehiculo from "../screens/Home/AddVehiculo";
import Notification from "../components/Notification";

const Stack = createStackNavigator();

export default function TimeLineStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="timelineStack"
        component={TimeLine}
        options={{
          title: "TimeLine",
          headerRight: () => <Notification></Notification>,
        }}
      />
      <Stack.Screen
        name="addVehiculoByTimeline"
        component={AddVehiculo}
        options={{ title: "Nuevo Vehiculo" }}
      />
    </Stack.Navigator>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import AccountStack from "./AccountStack";
import GarajeStack from "./GarajeStack";
import TimeLineStack from "./TimeLineStack";
import PerfilStack from "./PerfilStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="accountStack"
        tabBarOptions={{
          inactiveTintColor: "#003559", //B9D6F2    006DAA  061A40   0353A4  003559  #3F89CF
          activeTintColor: "#3F89CF",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="accountStack"
          component={AccountStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="garaje"
          component={GarajeStack}
          options={{ title: "Garaje" }}
        />
        <Tab.Screen
          name="timeline"
          component={TimeLineStack}
          options={{ title: "TimeLine" }}
        />
        <Tab.Screen
          name="perfil"
          component={PerfilStack}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "accountStack":
      iconName = "home";
      break;
    case "garaje":
      iconName = "garage-open-variant";
      break;
    case "timeline":
      iconName = "chart-line";
      break;
    case "perfil":
      iconName = "account";
      break;
    default:
      break;
  }

  return (
    <Icon
      type="material-community"
      name={iconName}
      size={35}
      color={color}
    ></Icon>
  );
}

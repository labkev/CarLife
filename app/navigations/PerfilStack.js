import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import Perfil from "../screens/Perfil";
import Notification from "../components/Notification";

const Stack = createStackNavigator();

export default function PerfilStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="perfilStack" component={Perfil} 
                 options={{
                    title: "Perfil",
                    headerRight: () => (
                      <Notification></Notification>
                    ),
                  }}
                />
            </Stack.Navigator>
    );
}
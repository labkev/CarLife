import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeList from "../components/Home/HomeList";

export default function Home(props) {
  return (
    <View style={styles.viewHome}>
      <View style={styles.viewHomeText}>
        <Text style={styles.displayName}>Hola {props.userInfo.displayName}!</Text>
        <Text numberOfLines={5}>Bienvenid@ a CarLife</Text>
      </View>
      <View>
        <HomeList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHome: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  viewHomeText: {
    backgroundColor: "#f2f2f2",
    marginLeft:15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  displayName: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

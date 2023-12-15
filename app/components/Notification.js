import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default function Notification() {
  return (
    <Icon
      style={styles.IconStyle}
      type="material"
      name="notifications"
      size={35}
      color="#003559"
      onPress={() => alert("This is a button!")}
    ></Icon>
  );
}

const styles = StyleSheet.create({
  IconStyle: {
    marginRight: "50%",
    paddingRight:50,
  },
});

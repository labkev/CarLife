import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  
  return (
    <ScrollView centerContent={true} style={styles.viewBodyStyle}>
      <Image
        source={require("../../../assets/img/LogoCarLife.png")}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <Text style={styles.titleStyle}> Consulta tu perfil de CarLife </Text>
      <Text style={styles.descriptionStyle}>
        {" "}
        CarLife, el unico y mejor asistente para tu vehiculo, gestiona y
        administra los datos de tu vehiculo de forma sencilla, encunetra
        soluciones y proveedores para todo lo que necesite tu vehiculo.
      </Text>
      <View style={styles.viewBtnStyle}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainerStyle}
          title={"Ver tu perfil"}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBodyStyle: {
    marginLeft: 30,
    marginRight: 30,
  },
  imageStyle: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionStyle: {
    marginBottom: 20,
    textAlign: "center",
  },
  viewBtnStyle: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#006DAA",
  },
  btnContainerStyle: {
    width: "70%",
  },
});

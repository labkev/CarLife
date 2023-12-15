import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";
import LoginFacebook from "../../components/Account/LoginFacebook";
import LoginGoogle from "../../components/Account/LoginGoogle";

export default function Login() {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/LogoCarLife.png")}
        resizeMode="contain"
        style={styles.LogoStyle}
      />
      <View style={styles.viewContainerStyle}>
        <LoginForm toastRef={toastRef} />
        <CreateCuenta />
      </View>
      <Divider style={styles.DividerStyle}></Divider>
      <View style={styles.viewContainerSocialStyle}>
        <LoginFacebook />
        <LoginGoogle />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
}

function CreateCuenta() {
  const navigation = useNavigation();
  return (
    <Text style={styles.TextRegisterStyle}>
      ¿Aun no tienes una cuenta?{" "}
      <Text
        style={styles.TextBtnRegisterStyle}
        onPress={() => navigation.navigate("register")}
      >
        Regístrate!
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  LogoStyle: {
    height: 150,
    width: "100%",
    marginTop: "25%",
  },
  viewContainerStyle: {
    marginRight: 40,
    marginLeft: 40,
  },
  viewContainerSocialStyle: {
    marginLeft:"30%",
    flexDirection: "row",
  },
  TextRegisterStyle: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  TextBtnRegisterStyle: {
    color: "#3F89CF",
    fontWeight: "bold",
  },
  DividerStyle: {
    backgroundColor: "#003559",
    margin: 40,
  },
});

import React, {useRef} from "react";
import { StyleSheet, View, Image } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/LogoCarLife.png")}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <View style={styles.viewFormStyle}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  viewFormStyle: {
    marginLeft: 40,
    marginRight: 40,
  },
});

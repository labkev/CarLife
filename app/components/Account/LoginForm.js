import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { validateEmail } from "../../utilities/validations";
import { isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";


export default function LoginForm(props) {
  const { toastRef } = props;
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormPassword());
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const onSubmit = () => {    
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password)
    ) {
      toastRef.current.show("Todos los campos son obligatorios");
    }
    else if(!validateEmail(formData.email)){
      toastRef.current.show("El email no es correcto");
    }
    else{
      setLoading(true);
      firebase.auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        setLoading(false);
        console.log("ok")
        navigation.navigate("account");       
      })
      .catch(() =>{
        setLoading(false);
        toastRef.current.show("Email o contraeña incorrecta");
      })
    }
  };
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <View style={styles.FormContainerStyle}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.InputFormStyle}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.InputFormStyle}
        passwor={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setshowPassword(!showPassword)}
          />
        }
      />     
      <Button
        title="Iniciar sesión"
        containerStyle={styles.BtnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="Iniciando sesión"/>
    </View>
  );
}

function defaultFormPassword() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  FormContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  InputFormStyle: {
    width: "100%",
    marginTop: 20,
  },
  BtnContainerStyle: {
    width: "95%",
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: "#3F89CF",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});

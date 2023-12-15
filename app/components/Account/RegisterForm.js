import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { validateEmail } from "../../utilities/validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";


export default function RegisterForm(props) {
  const { toastRef } = props;
  const [showPassword, setshowPassword] = useState(false);
  const [showRepeatPassword, setshowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormPassword());
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const onSubmit = () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("Todos los campos son obligatorios");
    }
    else if(!validateEmail(formData.email)){
      toastRef.current.show("El email no es correcto");
    }
    else if(formData.password !== formData.repeatPassword){
      toastRef.current.show("las contraseñas tienen que ser iguales");
    }
    else if(size(formData.password) < 6){
      toastRef.current.show("las contraseñas tienen que tener al menos 6 caracteres");
    }
    else{
      setLoading(true);
      firebase.auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(Response => {
        setLoading(false);
        navigation.navigate("account");       
      })
      .catch(() =>{
        setLoading(false);
        toastRef.current.show("El email ya esta en uso, pruebe con otro.");
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
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.InputFormStyle}
        passwor={true}
        secureTextEntry={showRepeatPassword ? false : true}
        onChange={(e) => onChange(e, "repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setshowRepeatPassword(!showRepeatPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.BtnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="Creando cuenta"/>
    </View>
  );
}

function defaultFormPassword() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
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

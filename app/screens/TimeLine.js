import React, { useState } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";
// import { Dropdown } from "react-native-material-dropdown";
// import DatePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import TimeLineList from "../components/TimeLine/TimeLineList";

export default function TimeLine() {
    // const [date, setDate] = useState(new Date(1598051730000));
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);
  
    // const onChange = (event, selectedDate) => {
    //   const currentDate = selectedDate || date;
    //   setShow(Platform.OS === 'ios');
    //   setDate(currentDate);
    // };
  
    // const showMode = (currentMode) => {
    //   setShow(true);
    //   setMode(currentMode);
    // };
  
    // const showDatepicker = () => {
    //   showMode('date');
    // };
  
    // const showTimepicker = () => {
    //   showMode('time');
    // };
//   let data = [
//     {
//       value: "ABC123",
//     },
//     {
//       value: "DEF456",
//     },
//     {
//       value: "GHI789",
//     },
//   ];
  return (
    <View style={styles.viewHome}>
      <View style={styles.viewHomeText}>
        {/* <Dropdown
          label="Vehiculo"
          data={data}
          onChangeText={(value) => {
            alert(value);
          }}
        /> */}
       <View>
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
      </View>
      <View>
        {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
      </View>
      {/* {show && (
        <DatePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */}
      </View>
      <View>
        {/* <TimeLineList /> */}
        <CreateCuenta/>
      </View>
    </View>
  );
}

function CreateCuenta() {
  const navigation = useNavigation();
  return (
    <View style={styles.ContainerInfoStyle}>
      <Text style={styles.TextInfoStyle}>
        ¡Oops aun no tienes Vehiculos registrados!
      </Text>
      <Button
        title="Registra tu vehiculo"
        containerStyle={styles.BtnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={() => navigation.navigate("addVehiculoByTimeline")}
      />
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
    margin: 15,
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  displayName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  ContainerInfoStyle: {
    alignItems: "center",
    marginTop: "40%",
    // marginLeft: 35,
    // marginRight: 10,
  },
  TextInfoStyle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  TextBtnRegisterStyle: {
    color: "#3F89CF",
    fontWeight: "bold",
  },
  BtnContainerStyle: {
    width: "55%",
    marginTop: 20,
  },
  btnStyle: {
    backgroundColor: "#3F89CF",
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

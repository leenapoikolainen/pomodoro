import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function TimerButtons(props) {
  if (props.timerOn) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.stopTimer}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.startTimer}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TimerButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#c0c0c0",
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "300",
    color: "white",
  },
});

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

function TimerSetup(props) {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Work Time:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={props.setWorkTime}
          returnKeyType={"done"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Rest Time:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={props.setBreakTime}
          returnKeyType={"done"}
        />
      </View>
    </View>
  );
}
export default TimerSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

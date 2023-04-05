import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

function TimerSetup(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headLineText}>Set up your timer parameters:</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Work Time:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={props.setWorkTime}
          returnKeyType={"done"}
          placeholder="min"
          defaultValue="25"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Rest Time:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={props.setBreakTime}
          returnKeyType={"done"}
          placeholder="min"
          defaultValue="5"
        />
      </View>
    </View>
  );
}
export default TimerSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 20,
    padding: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 20,
    marginRight: 10,
    width: 120,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 70,
  },
  headLineText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timer: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

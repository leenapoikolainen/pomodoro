import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function TimerButtons(props) {
  if (props.timerOn) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.pauseButtonStyle, styles.shadowProp]}
          onPress={props.stopTimer}
        >
          <Text style={[styles.buttonText, styles.shadowProp]}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.resetButtonStyle, styles.shadowProp]}
          onPress={props.resetTimer}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.playButtonStyle, styles.shadowProp]}
          onPress={props.startTimer}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.resetButtonStyle, styles.shadowProp]}
          onPress={props.resetTimer}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TimerButtons;

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "300",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
 
  pauseButtonStyle: {
    alignItems: "center",
    backgroundColor: "#cd5c5c",
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 120,
  },
  playButtonStyle: {
    alignItems: "center",
    backgroundColor: "#3cb371",
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 120,
  },
  resetButtonStyle: {
    alignItems: "center",
    backgroundColor: "#c0c0c0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 120,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  
});

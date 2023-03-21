import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TimerDisplay({ timer, working, onBreak }) {
  const formatTime = (time) => {
    if (isNaN(time)) {
      return "timer";
    } else {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      if (seconds < 1) {
        seconds = seconds * 60;
      }
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return minutes + ":" + seconds;
    }
  };

  return (
    <View>
      <Text>{working ? "Working" : ""}</Text>
      <Text>{onBreak ? "On a break" : ""}</Text>

      <View style={styles.container}>
        <Text style={styles.textStyle}>{formatTime(timer)}</Text>
      </View>
    </View>
  );
}

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "#C2362B",
    padding: "10%",
    marginBottom: 20,
    borderRadius: 80,
  },
  textStyle: {
    fontSize: 50,
    fontWeight: "400",
    color: "white",
  },
});

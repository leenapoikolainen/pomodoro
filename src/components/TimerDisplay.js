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
      {/* Status text */}
      <View style={styles.container}>
        
        {!working && !onBreak && (
          <Text style={styles.textStyle}>Set up your timer</Text>
        )}
        {working && <Text style={styles.textStyle}>Keep on working!</Text>}
        {onBreak && <Text style={styles.textStyle}>Enjoy your break!</Text>}
      </View>

       {/* Timer box */}
      {!working && !onBreak && (
        <View style={styles.setTimerContainer}>
          <Text style={styles.timerTextStyle}>{formatTime(timer)}</Text>
        </View>
      )}
      {working && (
        <View style={styles.timerContainer}>
          <Text style={styles.timerTextStyle}>{formatTime(timer)}</Text>
        </View>
      )}
      {onBreak && (
        <View style={styles.breakTimerContainer}>
          <Text style={styles.timerTextStyle}>{formatTime(timer)}</Text>
        </View>
      )}
    </View>
  );
}

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    alignItems: "center",
    padding: "5%",
  },
  timerContainer: {
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "#C2362B",
    padding: "10%",
    marginBottom: 20,
    borderRadius: 80,
  },
  breakTimerContainer: {
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "#ffd700",
    padding: "10%",
    marginBottom: 20,
    borderRadius: 80,
  },
  setTimerContainer: {
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "#696969",
    padding: "10%",
    marginBottom: 20,
    borderRadius: 80,
  },
  timerTextStyle: {
    fontSize: 50,
    fontWeight: "400",
    color: "white",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },
});

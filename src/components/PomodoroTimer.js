import React, { useState, useEffect, useCallback } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TimerDisplay from "./TimerDisplay";
import TimerSetup from "./TimerSetup";

function PomodoroTimer() {
  const [workTime, setWorkTime] = useState(0.1);
  const [restTime, setRestTime] = useState(0.2);
  const [timer, setTimer] = useState(workTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    let interval = null;
    // Timer starts when either work time or rest time starts
    if (isActive || isResting) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  useEffect(() => {
    if ((timer === 0 && isActive) || (timer === 0 && isResting)) {
      // Timer is 0, status active --> change to rest time
      if (!isResting) {
        setIsActive(false);
        setIsResting(true);
        setTimer(restTime * 60);
        console.log("Option 1");
      }
      // Timer is 0, status resting --> change to work time
      else {
        setIsResting(false);
        setTimer(workTime * 60);
        setIsActive(true);
        console.log("Option 2");
      }

      return () => {};
    }
  }, [timer]);

  // Updates only after the effect function has been executed
  //console.log("is active is " + isActive);
  //console.log("is resting is " + isResting);

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "timer";
    } else {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return minutes + ":" + seconds;
    }
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    setIsResting(false);
    //setTimer(workTime * 60);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsResting(false);
    setWorkTime(0.1);
    setRestTime(0.2);
    setTimer(workTime * 60);
  };

  const handleWorkTimeChange = (text) => {
    if (!isNaN(text)) {
      setWorkTime(parseInt(text));
      setIsActive(false);
      if (!isActive && !isResting) {
        setTimer(parseInt(text) * 60);
      }
    }
  };

  const handleRestTimeChange = (text) => {
    setRestTime(parseInt(text));
    if (isActive && isResting) {
      setTimer(parseInt(text) * 60);
    }
  };

  return (
    <View style={styles.container}>
      {/*
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Work Time:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={handleWorkTimeChange}
          returnKeyType={"done"}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Rest Time:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={handleRestTimeChange}
          returnKeyType={"done"}
        />
      </View>
  */}
      <TimerSetup
        setWorkTime={handleWorkTimeChange}
        setBreakTime={handleRestTimeChange}
      />

      <Text>
        {isNaN(workTime)
          ? "Please set your work time"
          : "" + "Your work time is set to " + workTime}
      </Text>

      <Text>
        {isNaN(restTime)
          ? "Please set your break time"
          : "" + "Your work time is set to " + restTime}
      </Text>

      <TimerDisplay timer={timer} working={isActive} onBreak={isResting} />

      {/*
      <Text style={styles.timer}>{formatTime(timer)}</Text>
      <Text>{isActive ? "Working" : "Not Working"}</Text>
        */}

      <TouchableOpacity
        style={styles.button}
        onPress={isActive ? stopTimer : startTimer}
      >
        <Text style={styles.buttonText}>{isActive ? "Stop" : "Start"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={resetTimer}>
        <Text style={styles.buttonText}>{"Reset"}</Text>
      </TouchableOpacity>
    </View>
  );
}

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

export default PomodoroTimer;

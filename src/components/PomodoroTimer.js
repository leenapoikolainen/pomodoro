import React, { useState, useEffect, useCallback } from "react";
import { TextInput } from "react-native";
import { Alert, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import TimerButtons from "./TimerButtons";
import TimerDisplay from "./TimerDisplay";
import TimerSetup from "./TimerSetup";

function PomodoroTimer() {
  const [workTime, setWorkTime] = useState(0.1); // For testing purposes, set the work time to few seconds
  const [restTime, setRestTime] = useState(0.2); // For testing purposes, set the break time to few seconds
  const [timer, setTimer] = useState(workTime * 60); // Timer initialised with work time
  const [isActive, setIsActive] = useState(false);  // Timer not active when starting
  const [isResting, setIsResting] = useState(false); // Timer not resting when starting
  const [timerRunning, setTimerRunning] = useState(false); // Timer not running when starting
  const [worSetsCompleted, setWorkSetsCompleted] = useState(0); // No work sets completed

  useEffect(() => {
    let interval = null;

    // Timer starts when either work time or rest time starts
    if (timerRunning) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timer]);

  useEffect(() => {
    if (timer === 0 && timerRunning) {
      // Timer is 0, status active --> change to rest time
      if (!isResting) {
        setIsActive(false);
        setIsResting(true);
        setTimer(restTime * 60);
        console.log("Option 1");
        setWorkSetsCompleted(worSetsCompleted + 1);
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
  }, [timer, timerRunning]);

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
    if (workTime === 0 || isNaN(workTime)) {
      Alert.alert(
        "Work time not set",
        "You need to set up your work time (>0 min)",
        [{ text: "OK" }]
      );
      return;
    }
    if (restTime === 0 || isNaN(restTime)) {
      Alert.alert(
        "Break time not set",
        "You need to set up your rest time (>0 min)",
        [{ text: "OK" }]
      );
      return;
    }
    // Initial state
    if (!isActive && !isResting) {
      setIsActive(true);
    }

    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsResting(false);
    setWorkTime(0.1);
    setRestTime(0.2);
    setTimer(workTime * 60);
    setTimerRunning(false);
    setWorkSetsCompleted(0);
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
    <View>
      <Header />
      <View style={styles.container}>
   
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

        <TimerDisplay timer={timer} working={isActive} onBreak={isResting} running={timerRunning} />
        <Text>Sets done: {worSetsCompleted}</Text>

        <TimerButtons
          timerOn={timerRunning}
          stopTimer={stopTimer}
          startTimer={startTimer}
          resetTimer={resetTimer}
        />
      </View>
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

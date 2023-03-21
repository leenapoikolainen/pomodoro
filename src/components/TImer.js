import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';


function Timer () {
    const [worktTime, setWorkTime] = useState(0.1)
    const [restTime, setRestTime] = useState(0.1);
    const [timer, setTimer] = useState(workTime * 60);
    const [isActive, setIsActive] = useState(false);
    const [isResting, setIsResting] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setTimer((timer) => timer - 1);
          }, 1000);
        } else {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, timer]);


      useEffect(() => {
        if (timer === 0) {
          setIsActive(false);
          //setIsResting(!isResting);
          if (!isResting) {
            setIsResting(true)
            setTimer(restTime * 60);
            setIsActive(true);
          } else {
            setIsResting(false)
            setTimer(workTime * 60);
          }
        }
      }, [timer]);


      const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds;
      };
} 
export default Timer;
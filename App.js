import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PomodoroTimer from "./src/components/PomodoroTimer";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <PomodoroTimer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

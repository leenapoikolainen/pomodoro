import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pomodoro Timer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "pink",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    //elevation: 30
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 50,
  },
});
export default Header;

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Profile from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import Color from "../shared/Color";

const index = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.black,
  },
});

export default index;

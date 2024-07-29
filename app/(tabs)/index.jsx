import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Profile from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import Color from "../shared/Color";
import Header from "../components/Header";
import Slider from "../components/Slider";
import PlayList from "../components/PlayList";

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Slider />
      <PlayList />
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

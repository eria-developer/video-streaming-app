import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Slider />
    </View>
  );
};

export default HomeScreen;

import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{ title: "Home", tabBarStyle: { alignSelf: "center" } }}
        />
        <Tabs.Screen name="profile" />
        <Tabs.Screen name="playlist" />
      </Tabs>
    </>
  );
};

export default _layout;

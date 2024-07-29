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
        <Tabs.Screen
          name="profile"
          options={{
            title: "My Profile",
            tabBarStyle: { alignSelf: "center" },
          }}
        />
        <Tabs.Screen
          name="playlist"
          options={{
            title: "My Playlist",
            tabBarStyle: { alignSelf: "center" },
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;

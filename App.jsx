import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "./App/Screens/ProfileScreen";

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;

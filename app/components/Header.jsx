import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Color from "../shared/Color";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.usernameText}>Eria Jackson</Text>
      </View>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.userImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.white,
  },

  usernameText: {
    color: Color.primaryColor,
  },
});

export default Header;

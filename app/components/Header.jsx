import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <View>
        <Text>Welcome back</Text>
        <Text>Eria Jackson</Text>
      </View>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.userImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
  },
});

export default Header;

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Box from "./box";

const Button = ({ name, colors, onPress }) => {
  return (
    <Box
      style={styles.button}
      colors={colors}
      onPress={onPress}
    >
      <Text style={styles.button__text}>{name}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 350,
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  button__text: {
    fontSize: 25,
    fontFamily: "Oswald",
    fontWeight: "bold",
    color: "white"
  }
});

export default Button;
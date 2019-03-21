import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import Box from "./box";

const width = Dimensions.get("screen").width;

const Dropdown = ({ onPress, label }) => {
  return (
    <Box style={styles.dropdown} onPress={onPress}>
      <View style={styles.dropdown__option}>
        <Text style={styles.dropdown__option__text}>{label}</Text>
      </View>
      <View style={styles.dropdown__down}>
        <AwesomeIcon name="chevron-down" size={25} color="#654383" />
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: "row",
    width: width - 30,
    height: 60,
    backgroundColor: "#fff",
    borderWidth: 0.2,
    borderRadius: 15,
    elevation: 2
  },
  dropdown__option: {
    flex: 0.9,
    justifyContent: "center",
    paddingHorizontal: 15
  },
  dropdown__option__text: {
    fontSize: 20
  },
  dropdown__down: {
    flex: 0.1,
    justifyContent: "center"
  }
});

export default Dropdown;

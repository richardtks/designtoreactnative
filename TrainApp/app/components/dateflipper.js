import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import AwesomeIcon from "react-native-vector-icons/FontAwesome";

const Dateflipper = ({ date, onPressLeft, onPressRight }) => {
  return (
    <View style={styles.dateflipper}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressLeft}>
        <AwesomeIcon name="chevron-left" size={18} color="#000" />
      </TouchableOpacity>
      <Text style={styles.dateflipper__text}>{date}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressRight}>
        <AwesomeIcon name="chevron-right" size={18} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dateflipper: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 2,
    flexDirection: "row"
  },
  dateflipper__text: {
    fontSize: 18,
    marginHorizontal: 40
  }
});

export default Dateflipper;

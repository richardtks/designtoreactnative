import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const Box = ({
  size: { width, height } = {},
  children,
  style,
  flex,
  row,
  border,
  color,
  spacearound,
  spacebetween,
  contentCenter,
  contentRight,
  alignCenter,
  circle
}) => {
  const containerStyle = StyleSheet.flatten([
    { width, height },
    flex && { flex },
    row && styles.row,
    border && styles.border,
    color && { backgroundColor: color },
    circle && { borderRadius: width / 2},
    spacearound && styles.spacearound,
    spacebetween && styles.spacebetween,
    contentCenter && styles.contentCenter,
    contentRight && styles.contentRight,
    alignCenter && styles.alignCenter,
    style
  ]);

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  border: {
    borderWidth: 1
  },
  spacebetween: {
    justifyContent: "space-between"
  },
  spacearound: {
    justifyContent: "space-around"
  },
  contentCenter: {
    justifyContent: "center"
  },
  contentRight: {
    justifyContent: "flex-end"
  },
  alignCenter: {
    alignItems: "center"
  }
});

export default Box;

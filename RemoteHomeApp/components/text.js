import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

import theme from "../constants/theme";

const CustomText = ({ large, small, label, children, style, height, weight, size, unit }) => {
  const textStyle = StyleSheet.flatten([
    large && theme.fonts.largeText,
    small && theme.fonts.smallText,
    label && theme.fonts.label,
    unit && theme.fonts.unitText,
    size && { fontSize: size },
    height && { lineHeight: height },
    weight && { fontWeight: weight },
    style && style
  ]);

  return <Text style={textStyle}>{children}</Text>;
};
const styles = StyleSheet.create({});

export default CustomText;

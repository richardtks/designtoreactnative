import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Box from "./box";

const Button = ({ onPress, children, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Box
        {...props}
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default Button;

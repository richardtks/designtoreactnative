import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const BoxWrapper = ({
  size = {},
  style, 
  ...restProps}) => {

  const { colors } = restProps, { width, height } = size
  const isSingleColor = !!colors && colors.length === 1
  const isLinearGradient = !!colors && colors.length > 1

  const containerStyle = StyleSheet.flatten([
    styles.box, 
    isSingleColor && { backgroundColor: colors[0] },
    width && { width },
    height && { height },
    style
  ])
  
  if (isLinearGradient) return (
    <LinearGradient style={containerStyle} {...restProps} />
  )

  return (
    <View style={containerStyle} {...restProps} />
  )
}

const TouchableWrapper = ({
  onPress,
  children,
  ...restProps
}) => {

  if (!onPress) return (
    <React.Fragment>
      { !!children && children }
    </React.Fragment>
  )

  return (
    <TouchableOpacity {...restProps} onPress={onPress}>
      { !!children && children }
    </TouchableOpacity>
  )
}

const Box = ({
  onPress, 
  children,
  ...restProps }) => {

  return (
    <TouchableWrapper activeOpacity={0.5} onPress={onPress}>
      <BoxWrapper 
        {...restProps}
      >
        { !!children && children }
      </BoxWrapper>
    </TouchableWrapper>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 110,
    width: 110,
    elevation: 5,
  }
});

export default Box;

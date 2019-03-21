import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const HeaderWrapper = (props) => {
  const { source, wrapperStyle, ...restProps } = props
  const hasImage = !!source
  const style = StyleSheet.flatten([styles.header__wrapper, wrapperStyle])

  return (
    hasImage ? 
      <ImageBackground style={style} source={source} {...restProps} /> :
      <LinearGradient style={style} {...restProps} />
  );
}

const Header = (props) => {
  const { children, containerStyle, height, ...restProps } = props
  const style = StyleSheet.flatten([
                  styles.header, 
                  height && { height },
                  containerStyle && containerStyle])

  return (
    <View style={style}>
      <HeaderWrapper
        {...restProps}
      >
        { !!children && children }
      </HeaderWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250
  },
  header__title: {
    position: "absolute",
    top: 120,
    left: 25,
    fontSize: 35,
    fontFamily: "Oswald",
    fontWeight: "bold",
    color: "white"
  },
  header__wrapper: {
    flex: 1,
  }
});

export default Header;

import React, { Component } from "react";
import { Text, View, PanResponder } from "react-native";

import Box from "../components/box";

import theme from "../constants/theme";

const CONTROLLER_HEIGHT = 200;

export default class HorizontalSlider extends Component {
  state = {
    panValue: 0,
    rangeValue: 16,
    height: 16,
  };

  handleMove = moveValue => {
    const { panValue } = this.state;
    const minValue = 16, maxValue = 30;
    const max = maxValue > CONTROLLER_HEIGHT ? maxValue : CONTROLLER_HEIGHT;
    const range = maxValue - minValue;

    let value = panValue - (moveValue / range);
    if (value > max) value = max;
    if (value < minValue) value = minValue;

    const height = (value / max) * CONTROLLER_HEIGHT;
    let rangeValue = (value / max) * maxValue;
    if (rangeValue < minValue) rangeValue = minValue;

    this.setState({ panValue: value, rangeValue, height });
  }

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (evt, { dy } ) => this.handleMove(dy)
  })

  render() {
    const { height, rangeValue } = this.state;
    return (
      <Box
        color={theme.colors.gray2}
        size={{ width: 80, height: 200 }}
        style={{
          borderRadius: 10,
          justifyContent: "flex-end",
          overflow: "hidden"
        }}
        {...this.panResponder.panHandlers}
      >
        <Box
          style={{
            top: 15,
            zIndex: 1,
            position: "absolute",
            alignSelf: "center"
          }}
        >
          <Text>{`${rangeValue.toFixed(0)}°C`}</Text>
        </Box>
        <Box color={theme.colors.accent} size={{ height }} />
      </Box>
    );
  }
}

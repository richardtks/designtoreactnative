import React, { Component } from "react";
import { Text, View, PanResponder } from "react-native";

import Box from "../components/box";

import theme from "../constants/theme";

const CONTROLLER_HEIGHT = 200;

export default class Slider extends Component {
  state = {
    panValue: 0,
    rangeValue: 0,
    percentage: 0,
  };

  handleMove = moveValue => {
    const { panValue } = this.state;
    const { minValue, maxValue } = this.props;
    const max = maxValue > CONTROLLER_HEIGHT ? maxValue : CONTROLLER_HEIGHT;
    const range = (maxValue || max) - minValue;

    let value = panValue - (moveValue / range);
    if (value > max) value = max;
    if (value < minValue) value = minValue;

    const percentage = (value / max) * 100;
    const rangeValue = (range * percentage) / 100;

    console.log('hello')

    this.setState({ panValue: value, rangeValue, percentage });
  }

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (evt, { dy }) => this.handleMove(dy)
  })

  render() {
    const { minValue } = this.props;
    const { rangeValue, percentage } = this.state;

    const height = `${percentage || minValue}%`;

    console.log('height', height)

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
          <Text>25°C</Text>
        </Box>
        <Box color={theme.colors.accent} size={{ height: "100%" }} />
      </Box>
    );
  }
}

Slider.defaultProps = {
  minValue: 10,
  maxValue: 45,
}

import React, { Component } from "react";
import { Slider, StyleSheet } from "react-native";

import Text from "../components/text";
import Box from "../components/box";

import theme from "../constants/theme";

export default class CustomSlider extends Component {
  state = {
    value: 0
  };

  handleValueChange = (value) => {
    this.setState({
      value: Math.floor(value * 100)
    })
  }

  render() {
    const { label, textSize, ...props } = this.props;
    const { value } = this.state;
    return (
      <Box {...props} spacebetween>
        <Box row spacebetween style={styles.labelSection}>
          <Text label size={textSize}>
            {label}
          </Text>
          <Text>{value}</Text>
        </Box>
        <Slider
          thumbTintColor={theme.colors.accent}
          minimumTrackTintColor={theme.colors.accent}
          maximumTrackTintColor={theme.colors.gray2}
          onValueChange={this.handleValueChange}
        />
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  labelSection: {
    paddingHorizontal: 10,
    marginVertical: 25,
  },
});

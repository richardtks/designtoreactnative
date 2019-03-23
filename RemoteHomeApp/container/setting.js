import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Box from "../components/box";
import Text from "../components/text";
import HorizontalSlider from "../components/horizontalslider";
import Slider from "../components/slider";

import Icons, { BackIcon } from "../constants/icons";
import theme from "../constants/theme";

export default class Setting extends Component {
  render() {
    return (
      <Box style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <Box row size={{ height: 250 }}>
          <Box flex={1}>
            {Icons["ac"].component({ size: 60, color: theme.colors.gray })}
            <Box style={{ alignItems: "flex-end" }} row contentRight>
              <Text large>34</Text>
              <Text unit>°C</Text>
            </Box>
            <Text small>Temperature</Text>
          </Box>
          <Box flex={1} alignCenter>
            <HorizontalSlider />
          </Box>
        </Box>
        <Slider label="temperature" textSize={20}/>
        <Slider label="speed" textSize={20}/>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FC",
    padding: theme.sizes.base * 1.5
  },
});

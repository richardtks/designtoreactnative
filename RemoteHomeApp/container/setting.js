import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Slider } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Box from "../components/box";
import Text from "../components/text";
import HorizontalSlider from "../components/horizontalslider";

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
        <Box size={{ height: 70 }} spacebetween style={{ marginBottom: 40 }}>
          <Box row spacebetween style={{paddingHorizontal: 10}}>
            <Text label size={20}>Direction</Text>
            <Text>34°C</Text>
          </Box>
          <Slider
            style={{borderWidth: 2, borderColor: "red"}}
            thumbTintColor={theme.colors.accent}
            minimumTrackTintColor={theme.colors.accent}
            maximumTrackTintColor={theme.colors.gray2}
          />
        </Box>
        <Box size={{ height: 70 }} spacebetween style={{ marginBottom: 40 }}>
          <Box row spacebetween style={{paddingHorizontal: 10}}>
            <Text label size={20}>Speed</Text>
            <Text>34</Text>
          </Box>
          <Slider
            style={{borderWidth: 2, borderColor: "red"}}
            thumbTintColor={theme.colors.accent}
            minimumTrackTintColor={theme.colors.accent}
            maximumTrackTintColor={theme.colors.gray2}
          />
        </Box>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FC",
    padding: theme.sizes.base * 1.5
  }
});

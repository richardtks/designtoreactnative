import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { LineChart } from "react-native-svg-charts";
import { curveNatural } from "d3-shape";

import Box from "../components/box";
import Text from "../components/text";
import Button from "../components/button";

import theme from "../constants/theme";
import Icons, { IconKeys } from "../constants/icons";
import { screenWidth } from "../constants/global";

export default class Home extends Component {
  renderIcons() {
    const halfWidth = (screenWidth - theme.sizes.base * 3) / 2,
      circleradius = halfWidth - 30;

    return IconKeys.map((iconName, index) => (
      <Box
        key={index}
        contentCenter
        alignCenter
        size={{ width: halfWidth, height: halfWidth }}
      >
        <Button
          color={theme.colors.gray2}
          contentCenter
          alignCenter
          circle
          onPress={Icons[iconName].navigate}
          size={{ width: circleradius, height: circleradius }}
        >
          {Icons[iconName].component({size: 40, color: "#FF885A"})}
          <Text label>{Icons[iconName].name}</Text>
        </Button>
      </Box>
    ));
  }

  render() {
    return (
      <Box style={styles.container}>
        <Box style={styles.welcomeSection}>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.name}>John Doe</Text>
        </Box>
        <Box size={{ height: 150 }} row>
          <Box flex={1} contentRight style={styles.temperature}>
            <Text large>34</Text>
            <Text unit>°C</Text>
          </Box>
          <Box flex={1}>
            <Text small>Humidity</Text>
            <Box flex={1} style={{paddingHorizontal: 15}}>
              <LineChart
                yMax={100}
                yMin={0}
                data={[0, 20, 25, 15, 20, 55, 60]}
                style={{ flex: 0.8 }}
                curve={curveNatural}
                svg={{ stroke: theme.colors.accent, strokeWidth: 3 }}
              />
            </Box>
          </Box>
        </Box>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Box row spacebetween style={styles.wrapcontent}>
            {this.renderIcons()}
          </Box>
        </ScrollView>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FC",
    padding: theme.sizes.base * 1.5,
  },
  welcomeSection: {
    marginVertical: theme.sizes.base * 2
  },
  welcome: {
    fontSize: 20
  },
  name: {
    color: "#333333",
    fontSize: 20,
    fontWeight: "bold"
  },
  temperature: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  content: {
    flex: 1
  },
  wrapcontent: {
    flex: 1,
    flexWrap: "wrap"
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2
  }
});

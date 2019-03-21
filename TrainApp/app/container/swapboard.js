import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";

export default class Swapboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: { code: "KJM",name: "KRISHNARA-JAPURAM"},
      to: { code: "MAS", name: "CHENNAI CENTRAL" }
    };
  }

  handleSwap = () => {
    this.setState(prevState => ({
      from: prevState.to,
      to: prevState.from
    }))
  }

  render() {
    const { from, to } = this.state 
    const fromCode = from.code || '', fromName = from.name || '';
    const toCode = to.code || '', toName = to.name || '';
    return (
      <View style={styles.box}>
        <View style={styles.section}>
          <TouchableOpacity style={styles.content}>
            <View style={styles.content}>
              <Text style={styles.label}>FROM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <View style={styles.content}>
              <Text style={styles.placeLabel}>{fromCode}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <View style={styles.content}>
              <Text style={styles.label}>{fromName}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <View style={styles.lineStyle} />
          <View style={styles.lineStyle} />
        </View>
        <TouchableOpacity
          style={styles.swap}
          onPress={this.handleSwap}
        >
          <LinearGradient
            style={styles.swapIcon}
            colors={["#654383", "#AD4BA3"]}
            locations={[0, 1]}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
          >
            <MatComIcon name="swap-vertical" size={35} color={"#fff"} />
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.section}>
          <View style={styles.content}>
            <Text style={styles.label}>TO</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.placeLabel}>{toCode}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>{toName}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 300,
    borderRadius: 20,
    elevation: 1,
    backgroundColor: "#fff"
  },
  section: {
    flex: 0.8,
    flexDirection: "row"
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  swap: {
    position: "absolute",
    borderRadius: 25,
    backgroundColor: "blue",
    zIndex: 999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: 300 / 2 - 25
  },
  swapIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5
  },
  lineStyle: {
    width: "40%",
    borderWidth: 0.5,
    borderColor: "black"
  },
  content: {
    flex: 1,
    justifyContent: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  placeLabel: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

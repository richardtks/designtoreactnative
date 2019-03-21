import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

const width = Dimensions.get("screen").width;

class Checkbox extends Component {
  render() {
    const { isChecked = false, description, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
      >
        <View style={styles.checkbox}>
          <View style={styles.checkbox__boxsection}>
            <View style={styles.checkbox__boxsection__outsidebox}>
              {isChecked && (
                <View style={styles.checkbox__boxsection__insidebox} />
              )}
            </View>
          </View>
          <View style={styles.checkbox__descsection}>
            <Text style={styles.checkbox__descsection__text}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    height: 50,
    width: width - 30,
    flexDirection: "row",
  },
  checkbox__boxsection: {
    width: 40,
    justifyContent: "center"
  },
  checkbox__boxsection__outsidebox: {
    width: 25,
    height: 25,
    borderWidth: 0.5,
    elevation: 2,
    backgroundColor: "#fff",
    padding: 3
  },
  checkbox__boxsection__insidebox: {
    flex: 1,
    backgroundColor: "#654383"
  },
  checkbox__descsection: {
    flex: 1,
    justifyContent: "center"
  },
  checkbox__descsection__text: {
    fontSize: 20
  }
});

export default Checkbox;

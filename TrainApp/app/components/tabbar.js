import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import IconWrapper from "../components/iconwrapper";

const Tabbar = ({ labelProps, onPress }) => {
  const sortIcons = ["long-arrow-down", "long-arrow-up"];
  const { labels, selectedIndex } = labelProps;

  return (
    <View style={styles.tabbar}>
      {labels.map(({ label, isAsc }, index) => (
        <TouchableOpacity
          key={index}
          style={{ flex: 1 }}
          activeOpacity={0.5}
          onPress={onPress(index)}
        >
          <View
            style={[
              styles.tabbar__item,
              index < labels.length - 1 && styles.tabbar__item__seperator,
              selectedIndex === index && styles.tabbar__item__selected,
            ]}
          >
            <Text
              style={[
                styles.tabbar__item__text,
                selectedIndex === index && styles.tabbar__item__text__selected
              ]}
            >
              {label}
            </Text>
            <IconWrapper
              type="awesome"
              name={sortIcons[!isAsc ? 1 : 0]}
              size={15}
              color={selectedIndex === index ? "#fff" : "#000"}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  tabbar__item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    flexDirection: "row"
  },
  tabbar__item__selected: {
    backgroundColor: "#3C3C3C"
  },
  tabbar__item__text: {
    fontSize: 15,
    marginRight: 15
  },
  tabbar__item__text__selected: {
    color: "#fff"
  },
  tabbar__item__seperator: {
    borderRightWidth: 1
  }
});

export default Tabbar;

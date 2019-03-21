import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "./theme";

import NavigateService from "../navigation/navigationservice";

export default Icons = {
  light: {
    name: "Light",
    component: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="lightbulb-on-outline"
        {...props}
      />
    ),
    navigate: event => NavigateService.navigate("SettingScene")
  },
  ac: {
    name: "AC",
    component: ({ size, color, ...props }) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="ac-unit"
        {...props}
      />
    ),
    navigate: event => NavigateService.navigate("SettingScene")
  },
  temperature: {
    name: "Temperature",
    component: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="thermometer"
        {...props}
      />
    ),
    navigate: event => NavigateService.navigate("SettingScene")
  },
  fan: {
    name: "Fan",
    component: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="fan"
        {...props}
      />
    ),
    navigate: event => NavigateService.navigate("SettingScene")
  },
  wifi: {
    name: "Wi-Fi",
    component: ({ size, color, ...props }) => (
      <FontAwesome
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="wifi"
        {...props}
      />
    ),
    navigate: event => NavigateService.navigate("SettingScene")
  },
  electricity: {
    name: "Electricity",
    component: ({ size, color, ...props }) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="power"
        {...props}
      />
    ),
    navigate: event => NavigateService.navigate("SettingScene")
  }
};
export const IconKeys = Object.keys(Icons);

export const BackIcon = ({ size, color, ...props }) => (
  <MaterialIcons
    size={size || theme.sizes.back}
    color={color || theme.colors.accent}
    name="arrow-back"
    {...props}
  />
);

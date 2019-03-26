const colors = {
  accent: "#FA754C",
  black: "#292934",
  white: "#FFFFFF",
  gray: "#A7A7A7",
  gray2: "#ECEDEF",
  button: "#F4F5F7"
};

const sizes = {
  base: 14,
  font: 14,
  welcome: 18,
  name: 21,
  temperatureLabel: 40,
  largeText: 140,
  unitText: 40,
  button: 16,
  back: 40,
};

const fonts = {
  welcome: {
    fontSize: sizes.welcome,
    color: colors.gray,
    letterSpacing: -0.6,
    lineHeight: sizes.welcome + 4
  },
  name: {
    fontSize: sizes.name,
    fontWeight: "600",
    color: colors.black,
    letterSpacing: -1.1,
    lineHeight: sizes.name + 4
  },
  smallText: {
    fontSize: sizes.welcome,
    color: colors.gray,
    letterSpacing: -0.8,
    lineHeight: sizes.welcome + 4
  },
  largeText: {
    fontSize: sizes.largeText,
    color: colors.black,
    letterSpacing: -8,
    lineHeight: sizes.largeText,
    paddingTop: -sizes.largeText / 2,
  },
  unitText: {
    fontSize: sizes.unitText,
    color: colors.black,
    lineHeight: 80,
    fontWeight: "600",
  },
  label: {
    fontSize: sizes.button,
    color: colors.black,
    fontWeight: "600",
    letterSpacing: -0.4,
    lineHeight: sizes.button + 4
  },
  sliderLabel: {
    fontSize: sizes.button + 3,
    color: colors.black,
    letterSpacing: -0.4,
    lineHeight: sizes.button + 4
  }
};

export default { colors, sizes, fonts };

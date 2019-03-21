import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import TouchableFeedbackBox from "./touchablefeedbackbox";

class DateBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textState: true,
      textColor: '#000'
    }
  }

  invertTextColor = () => {
    const colors = ['#fff', '#000']

    this.setState(prevState => ({
      textState: !prevState.textState,
      textColor: !prevState.textState ? colors[1] : colors[0]
    }))

  }

  handleOnPress = () => {
    this.props.onPress();

    this.invertTextColor();
  }

  render() {
    const { dayTerm, day, date } = this.props;
    const dayTermStyle = StyleSheet.flatten([
      styles.dateBox__dayTerm,
      { color: this.state.textColor }
    ]),
      dateStyle = StyleSheet.flatten([
        styles.dateBox__date,
        { color: this.state.textColor }
      ]),
      dayStyle = StyleSheet.flatten([
        styles.dateBox__day,
        { color: this.state.textColor }
      ]);

    return (
      <TouchableFeedbackBox 
        style={styles.dateBox} 
        onPress={this.handleOnPress}>
        <Text style={dayTermStyle}>{dayTerm}</Text>
        <Text style={dateStyle}>{date}</Text>
        <Text style={dayStyle}>{day}</Text>
      </TouchableFeedbackBox>
    );
  }
}

const styles = StyleSheet.create({
  dateBox: {
    width: 120,
    height: 120,
    elevation: 2,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  dateBox__dayTerm: {
    fontSize: 18,
    textAlign: "center"
  },
  dateBox__date: {
    fontSize: 25
  },
  dateBox__day: {
    fontSize: 12
  }
});

export default DateBox;

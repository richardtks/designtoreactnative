import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'

import Header from "../components/header";

export default class Test extends Component {
  render() {
    return (
      <Header
        containerStyle={styles.header__container}
        wrapperStyle={styles.header__wrapper}
        colors={["#654383", "#AD4BA3"]}
        locations={[0, 1]}
        angle={180}
        angleCenter={{ x: 0.5, y: 0.5 }}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
        <Text style={styles.header__title}>PLAN MY JOURNEY</Text>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  header__container: {
  },
  header__wrapper: {
    flex: 1,
  },
  header__title: {
    position: "absolute",
    left: 25,
    bottom: 15,
    fontSize: 28,
    fontFamily: "Oswald",
    fontWeight: "bold",
    color: "white"
  },
})
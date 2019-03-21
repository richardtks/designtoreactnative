import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";

import Modal from "react-native-modalbox";

import Swapboard from "./swapboard";
import Header from "../components/header";
import DateBox from "../components/datebox";
import Dropdown from "../components/dropdown";
import Checkbox from "../components/checkbox";
import Button from "../components/button";

import navigatescreen from "../navigation/navigatescreen";

const width = Dimensions.get("screen").width;

export default class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlexible: false,
      isSpecial: false
    };
  }

  handleCheckboxOnPress = key => () => {
    this.setState(prevState => ({
      [key]: !prevState[key]
    }));
  };

  renderList() {
    var list = [];

    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>
      );
    }

    return list;
  }

  render() {
    const { isFlexible, isSpecial } = this.state;
    return (
      <React.Fragment>
        <ScrollView style={styles.container}>
          <Header
            colors={["#654383", "#AD4BA3"]}
            locations={[0, 1]}
            height={100}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
          >
            <StatusBar translucent={true} backgroundColor={"transparent"} />
            <Text style={styles.title}>PLAN MY JOURNEY</Text>
          </Header>
          <View style={styles.body}>
            <Swapboard />
            <View style={styles.dateSection}>
              <DateBox
                dayTerm={"TODAY"}
                date={"06 JAN"}
                day={"Sunday 2019"}
                onPress={() => {
                  console.log("hello");
                }}
              />
              <DateBox
                dayTerm={"TOMORROW"}
                date={"07 JAN"}
                day={"Monday 2019"}
                onPress={() => {
                  console.log("hello");
                }}
              />
              <DateBox
                dayTerm={"JOURNEY DATE"}
                date={"06 JAN"}
                day={"SELECT DATE"}
                onPress={() => {
                  console.log("hello");
                }}
              />
            </View>
            <Dropdown
              label={"GENERAL QUOTE"}
              onPress={() => this.refs.modal.open()}
            />
            <View style={styles.checkboxSection}>
              <Checkbox
                isChecked={isFlexible}
                onPress={this.handleCheckboxOnPress("isFlexible")}
                description={"Flexible with Date"}
              />
              <Checkbox
                isChecked={isSpecial}
                onPress={this.handleCheckboxOnPress("isSpecial")}
                description={"I'll book in special concession"}
              />
            </View>
            <Button
              name={"SEARCH TRAIN"}
              colors={["#654383", "#AD4BA3"]}
              onPress={navigatescreen("TrainlistScene")}
            />
          </View>
        </ScrollView>
        <Modal
          style={styles.modal}
          position={"bottom"}
          ref={"modal"}
          swipeArea={20}
        >
          <ScrollView>
            <View style={{ width: width, paddingLeft: 10 }}>
              {this.renderList()}
            </View>
          </ScrollView>
        </Modal>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  title: {
    position: "absolute",
    left: 25,
    bottom: 15,
    fontSize: 28,
    fontFamily: "Oswald",
    fontWeight: "bold",
    color: "white"
  },
  body: {
    margin: 15
  },
  dateSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25
  },
  checkboxSection: {
    marginVertical: 15
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: 300
  }
});

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Dimensions
} from "react-native";

import Header from "../components/header";
import Dateflipper from "../components/dateflipper";
import TouchableFeedbackBox from "../components/touchablefeedbackbox";
import Tabbar from "../components/tabbar";
import Box from "../components/box";

import { category, trainlist } from "../data/trainlist";

const width = Dimensions.get("screen").width;

class Trainlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateList: ["Sun 06 Jan 19", "Sun 07 Jan 19", "Sun 08 Jan 19"],
      get curDateIndex() {
        return Math.ceil((this.dateList.length - 1) / 2);
      },
      tabs: {
        labels: [
          { label: "Depature", isAsc: true },
          { label: "Arrival", isAsc: true },
          { label: "Travel time", isAsc: true }
        ],
        selectedFilterIndex: 0,
        selectedCategoryIndex: 0,
      }
    };
  }

  handlePressRight = () => {
    const { dateList } = this.state,
      maxIndex = dateList.length;

    this.setState(prevState => ({
      curDateIndex: (prevState.curDateIndex + 1) % maxIndex
    }));
  };

  handlePressLeft = () => {
    const { dateList } = this.state;

    this.setState(prevState => ({
      curDateIndex:
        (prevState.curDateIndex - 1 + dateList.length) % dateList.length
    }));
  };

  renderCardList() {
    return trainlist.map(
      ({ name, id, code, arrival, departure, traveltime, day }, index) => (
        <Box
          style={styles.trainlist__card}
          key={index}
          width={width - 40}
          height={150}
          colors={["#fff"]}
        >
          <Text style={styles.trainlist__card__title}>
            {`${name} (${id})`}
          </Text>
          <View
            style={[
              styles.trainlist__card__content,
              styles.trainlist__card__spacebetween
            ]}
          >
            <Text style={styles.trainlist__card__content_text}>
              {code}
            </Text>
            <Text
              style={[
                styles.trainlist__card__content_text,
                { letterSpacing: 5 }
              ]}
            >
              {day}
            </Text>
          </View>
          <View style={styles.trainlist__card__content}>
            <Text
              style={[
                styles.trainlist__card__content_text,
                { letterSpacing: -1.5 }
              ]}
            >
              {`${departure} - ${arrival} | Travel Time: ${traveltime}`}
            </Text>
          </View>
        </Box>
      )
    );
  }

  renderCategoryBox() {
    return category.map((label, index) => (
      <TouchableFeedbackBox
        style={styles.trainlist__categorybox}
        size={{ width: 120, height: 50 }}
        colors={["#fff"]}
        key={index}
      >
        <Text style={styles.trainlist__categorybox__text}>{label}</Text>
      </TouchableFeedbackBox>
    ));
  }

  handleOnPressSort = index => event => {
    this.setState(({ tabs: { labels, selectedFilterIndex } }) => {
      let newTab = [...labels];
      const { label, isAsc } = labels[index],
        canSort = selectedFilterIndex === index;

      newTab[index] = {
        label,
        isAsc: canSort ? !isAsc : isAsc
      };

      return {
        tabs: {
          labels: newTab,
          selectedFilterIndex: index
        }
      };
    });
  };

  render() {
    const { dateList, curDateIndex } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Header
          colors={["#654383", "#AD4BA3"]}
          locations={[0, 1]}
          height={100}
          angle={180}
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <StatusBar translucent={true} backgroundColor={"transparent"} />
          <Text style={styles.title}>TRAIN LIST</Text>
        </Header>
        <Dateflipper
          date={dateList[curDateIndex]}
          onPressRight={this.handlePressRight}
          onPressLeft={this.handlePressLeft}
        />
        <ScrollView horizontal style={styles.selection}>
          {this.renderCategoryBox()}
        </ScrollView>
        <Tabbar labelProps={this.state.tabs} onPress={this.handleOnPressSort} />
        {this.renderCardList([1, 1, 1, 1, 1])}
      </ScrollView>
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
  trainlist__selection: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "red"
  },
  trainlist__card: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 10,
    elevation: 2,
    padding: 20,
    justifyContent: "space-between"
  },
  trainlist__card__title: {
    fontSize: 23,
    fontFamily: "Oswald"
  },
  trainlist__card__content: {
    flexDirection: "row"
  },
  trainlist__card__spacebetween: {
    justifyContent: "space-between"
  },
  trainlist__card__content_text: {
    fontSize: 17
  },
  trainlist__categorybox: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#654383",
    elevation: 1
  },
  trainlist__categorybox__text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(45, 45, 45, 0.61)"
  }
});

export default Trainlist;

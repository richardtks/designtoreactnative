import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import headerImg from "../../assets/img/header.png";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import MatComIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../components/header";
import Box from "../components/box";
import navigatescreen from "../navigation/navigatescreen";
import IconWrapper from "../components/iconwrapper";

import { mainmenu, irctcmenu } from "../data/menu";

export default class Home extends Component {
  renderMainMenu() {
    return mainmenu.map(({ title, icon, path, colors }, index) => {
      return (
        <Box
          style={styles.body__box}
          size={{ width: 180, height: 180 }}
          colors={colors}
          locations={[0, 0.97]}
          angle={180}
          angleCenter={{ x: 0.5, y: 0.5 }}
          onPress={navigatescreen(path)}
          key={index}
        >
          <IconWrapper {...icon} size={40} />
          <Text style={styles.body__box__text}>{title}</Text>
        </Box>
      );
    });
  }

  renderIRCTCMenu() {
    return irctcmenu.map(({
      title, 
      icon, 
      colors,
    }, index) => {
      return (
        <Box colors={colors} key={index} style={styles.footer__box}>
          <IconWrapper {...icon} size={40} />
          <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10 }}>
            {title}
          </Text>
        </Box>
      );
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header source={headerImg} resizeMode="cover" blurRadius={0.5}>
          <StatusBar translucent={true} backgroundColor={"transparent"} />
          <Text style={styles.header__title}>TRAIN TICKETING</Text>
        </Header>
        <View style={styles.body}>
          <View style={styles.body__child}>{this.renderMainMenu()}</View>
          <View style={styles.footer}>
            <Text style={styles.footer__title}>IRCTC EXCLUSIVE</Text>
            <ScrollView horizontal contentContainerStyle={styles.footer__body}>
              {this.renderIRCTCMenu()}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 250
  },
  header__img: {
    flex: 1
  },
  header__title: {
    position: "absolute",
    top: 120,
    left: 25,
    fontSize: 35,
    fontFamily: "Oswald",
    fontWeight: "bold",
    color: "white"
  },
  body: {
    flex: 1
  },
  body__child: {
    top: -50,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: 360
  },
  body__box: {
    marginBottom: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body__box__text: {
    fontSize: 22,
    fontFamily: "Roboto",
    textAlign: "center",
    color: "#fff",
    marginTop: 10
  },
  footer: {
    flex: 1,
    paddingHorizontal: 20
  },
  footer__title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Oswald"
  },
  footer__body: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 15
  },
  footer__box: {
    height: 110,
    width: 110,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

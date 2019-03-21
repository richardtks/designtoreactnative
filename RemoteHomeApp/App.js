import React, { Component } from "react";

import AppContainer from "./navigation/main";
import NavigationService from './navigation/navigationservice';

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navRef => {
          NavigationService.setTopLevelNavigator(navRef);
        }}
      />
    );
  }
}

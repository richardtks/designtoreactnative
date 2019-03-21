import React, {Component} from 'react';
import NavigationService from './app/navigation/navigationservice';

import AppContainer from './app/container/main';

export default class App extends Component {
  render() {
    return (
      <AppContainer 
        ref={navRef => {
          NavigationService.setTopLevelNavigator(navRef)
        }} />
    );
  }
}
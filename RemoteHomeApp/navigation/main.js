import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../container/home";
import Setting from "../container/setting";

const AppNavigator = createStackNavigator({
  HomeScene: Home,
  SettingScene: Setting,
}, {
  initialRouteName: 'HomeScene',
  defaultNavigationOptions: {
    header: null,
  }
});

export default createAppContainer(AppNavigator);
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./home";
import Plan from "./plan";
import Trainlist from "./trainlist";

const AppNavigator = createStackNavigator({
  HomeScene: Home,
  PlanScene: Plan,
  TrainlistScene: Trainlist,
}, {
  initialRouteName: 'HomeScene',
  defaultNavigationOptions: {
    header: null,
  }
});

export default createAppContainer(AppNavigator);
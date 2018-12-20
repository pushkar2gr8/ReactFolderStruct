import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeFeed from "../Components/HomeFeed";
import CampList from "../Components/CampList";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeFeed },
  CampList: { screen: CampList }
});

//const AppNav = createAppContainer(AppNavigator);
export default AppNavigator;

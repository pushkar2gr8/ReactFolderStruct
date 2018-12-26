import { StackNavigator } from "react-navigation";
import HomeFeed from "../Components/HomeFeed";
import CampList from "../Components/CampList";

export const AppNavigator = StackNavigator({
  Home: { screen: HomeFeed },
  CampList: { screen: CampList }
});

//const AppNav = createAppContainer(AppNavigator);
export default AppNavigator;

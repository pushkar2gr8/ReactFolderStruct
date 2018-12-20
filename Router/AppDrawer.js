import { DrawerNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "./AppNavigator";
import CampList from "../Components/CampList";

const AppDrawer = DrawerNavigator({
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions: {
      drawerLabel: "HAHA"
    }
  },
  CampList: {
    screen: CampList,
    navigationOptions: {
      drawerLabel: "Setting"
    }
  }
});
//const drawer = createAppContainer(AppDrawer);
export default AppDrawer;

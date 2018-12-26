import { DrawerNavigator } from "react-navigation";
import HomeFeed from "./AppNavigator";
import CampList from "../Components/CampList";
import SideMenu from "../Components/SideMenu/SideMenu";

export default DrawerNavigator(
  {
    Home: {
      screen: HomeFeed
    },
    Camps: {
      screen: CampList
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300
  }
);

/**
 * Navigator core functionality code
 */

import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView
} from "react-navigation";

import HomeFeed from "../Components/HomeFeed";
import CampList from "../Components/CampList";

/**
 * navigation object is passed as a props to components
 */
const HomeScreen = ({ navigation }) => <HomeFeed navigation={navigation} />;

/**
 * Action bar maintained here for each page
 */
HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Homefeed",
    headerLeft: (
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          style={{ height: 36, width: 36 }}
          source={require("../assets/menu.png")}
        />
      </TouchableOpacity>
    )
  };
};

const CampScreen = ({ navigation }) => <CampList navigation={navigation} />;
CampScreen.navigationOptions = {
  headerTitle: "CampScreen"
};

/**
 * Screen movement stack
 */
const AppStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Camp: { screen: CampScreen }
});

/**
 * Drawer stack
 */
const DrawerExample = createDrawerNavigator(
  {
    AppStack: {
      path: "/",
      screen: AppStack
    },
    CampList: {
      path: "/sent",
      screen: CampList
    }
  },

  {
    initialRouteName: "AppStack",
    contentOptions: {
      activeTintColor: "#00b9ff"
    }
  }
);

const AppNav = createAppContainer(DrawerExample);
export default AppNav;

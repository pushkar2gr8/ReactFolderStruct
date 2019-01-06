/**
 * Navigator core functionality code
 */

import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView
} from "react-navigation";

import HomeFeed from "../Containers/HomeFeed";
import CampList from "../Containers/CampList";
import SplashScreen from "../Containers/SplashScreen";

/**
 * navigation object is passed as a props to components
 */
const LaunchScreen = ({ navigation }) => (
  <SplashScreen navigation={navigation} />
);
const homeScreen = ({ navigation }) => <HomeFeed navigation={navigation} />;
const campScreen = ({ navigation }) => <CampList navigation={navigation} />;

/**
 * Action bar maintained here for each page
 */
homeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Homefeed",
    headerTintColor: "#666666",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerLeft: (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          style={styles.image}
          source={require("../assets/leftMenu.png")}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => alert("language change")}
      >
        <Image
          style={styles.image}
          source={require("../assets/rightMenu.png")}
        />
      </TouchableOpacity>
    )
  };
};

campScreen.navigationOptions = {
  headerTitle: "CampScreen"
};

LaunchScreen.navigationOptions = {
  header: null
};

/**
 * Screen movement stack
 */
const AppStack = createStackNavigator({
  Splash: { screen: LaunchScreen },
  Home: { screen: homeScreen },
  Camp: { screen: campScreen }
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

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  image: { height: 22, width: 22 }
});

const AppNav = createAppContainer(DrawerExample);
export default AppNav;

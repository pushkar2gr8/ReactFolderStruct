import React, { Component } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

const gifHeight = Dimensions.get("window").height;
const gifWidth = Dimensions.get("window").width;

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: gifHeight, width: gifWidth }}
          source={require("../assets/splashLogo.gif")}
          onLoadEnd={() =>
            setTimeout(() => {
              this.props.navigation.navigate("Home");
            }, 5000)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

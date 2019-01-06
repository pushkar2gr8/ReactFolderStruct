import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            height: 160,
            width: 320
          }}
          source={require("../assets/splashLogo.gif")}
          onLoadEnd={() =>
            setTimeout(() => {
              this.props.navigation.navigate("Home");
            }, 4000)
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

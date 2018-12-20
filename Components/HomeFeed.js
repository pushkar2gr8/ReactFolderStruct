import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SunButton } from "../Views/SunViews";

export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>feed will go here</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("CampList")}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 30,
    width: 100
  }
});

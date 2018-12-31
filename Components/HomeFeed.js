import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetchedData: state.fetchedData,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

class HomeFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fetching, fetchedData, onRequest, error } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text>{fetching ? "Fetching..." : fetchedData}</Text>
        <TouchableOpacity style={styles.button} onPress={() => onRequest()}>
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
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    height: 30,
    width: 100
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeed);

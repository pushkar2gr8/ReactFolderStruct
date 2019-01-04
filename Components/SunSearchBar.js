import React, { Component } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import PropTypes from "prop-types";

const SunSearchBar = props => {
  const { onChangeText, hidden, placeHolder } = props;

  if (hidden) {
    return null;
  } else {
    return (
      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeHolder}
          onChangeText={onChangeText}
        />
        <Image
          style={{ height: 15, width: 15 }}
          source={require("../assets/search.png")}
        />
      </View>
    );
  }
};

SunSearchBar.propTypes = {
  hidden: PropTypes.bool,
  onChangeText: PropTypes.func,
  placeHolder: PropTypes.string
};

const styles = StyleSheet.create({
  inputTextContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    maxHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 5
  },
  textInput: {
    width: "90%",
    backgroundColor: "transparent"
  }
});

export default SunSearchBar;

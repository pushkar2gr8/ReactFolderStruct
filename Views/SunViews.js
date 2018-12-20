import { View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export const sunButton = props => {
  const { title, style, onPress, hidden } = props;

  if (hidden) {
    return null;
  } else {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
};

sunButton.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number
  ])
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD"
  }
});

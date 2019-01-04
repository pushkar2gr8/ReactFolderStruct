import { View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export const SunButton = props => {
  const { title, style, onPress, hidden } = props;

  if (hidden) {
    return null;
  } else {
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>
          {this.props.text && this.props.text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
};

sunButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  styles: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD"
  }
});

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform
} from "react-native";

import { connect } from "react-redux";

import { Calendar } from "react-native-calendars";
import Carousel from "react-native-snap-carousel";
import mockdata from "../assets/mockdata.json";

import SearchBar from "../Components/SunSearchBar";

import { thunk_action_creator } from "../Actions/actions";

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetchedData: state.fetchedData,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequest: () => dispatch(thunk_action_creator)
  };
};

const itemWidth = Dimensions.get("window").width / 1.25;
const itemHeight = Dimensions.get("window").width / 1.25;
var searchString = "";
class HomeFeed extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.slide}>
        <Image
          style={{
            height: Platform.OS === "ios" ? itemHeight : itemHeight / 1.35,
            width: Platform.OS === "ios" ? itemWidth : itemWidth / 1.35
          }}
          source={{ uri: item.Photo }}
        />
        <Text>{item.Name}</Text>
      </View>
    );
  };

  _onSearch = val => {
    searchString = val;
  };

  render() {
    const { fetching, fetchedData, onRequest, error } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.bookingDetails}>
          <Text>{fetching ? "Fetching..." : fetchedData}</Text>
          <Text>Zoek en boek campings</Text>
          <SearchBar
            hidden={false}
            placeHolder={"Land / regio / plaats / naam"}
            onChangeText={str => this._onSearch(str)}
          />

          <View style={styles.calenderContainer}>
            <TouchableOpacity style={styles.calender} />
            <View style={{ width: 10 }} />
            <TouchableOpacity style={styles.calender} />
            {/* <Calendar style={{ flex: 1 }} /> */}

            {/* <Calendar style={{ flex: 1 }} /> */}
          </View>

          <View style={styles.nightsContainer}>
            <Image
              style={{ height: 16, width: 16, marginRight: 5 }}
              source={require("../assets/nights.png")}
            />
            <Text>number of nights</Text>
          </View>

          <View style={styles.customerContainer}>
            <View style={styles.customerType}>
              <Text>Adults</Text>
              <Text>number</Text>
            </View>

            <View style={styles.seperator} />
            <View style={styles.customerType}>
              <Text>Children</Text>
              <Text>number</Text>
            </View>

            <View style={styles.seperator} />
            <View style={styles.customerType}>
              <Text>Pets</Text>
              <Text>number</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => onRequest()}>
            <Text style={{ color: "#fff" }}>Click</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.campDetails}>
          <Text style={{ margin: 10, fontSize: 16 }}>Popular Campsites</Text>
          {/* <Text>Zoek en boek campings</Text>
          <TouchableOpacity style={styles.button} onPress={() => onRequest()}>
            <Text>Click</Text>
          </TouchableOpacity> */}
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={mockdata.Campsites}
            renderItem={(data, index) => this._renderItem(data, index)}
            sliderWidth={Dimensions.get("window").width}
            sliderHeight={Dimensions.get("window").height / 2}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  seperator: { height: "70%", width: 2, backgroundColor: "#dddddd" },
  mainContainer: {
    flex: 1
  },
  slide: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2.5,
    marginLeft: 2.5
  },
  button: {
    flex: 1,
    borderRadius: 10,
    marginTop: 5,
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d70e80"
  },
  bookingDetails: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    backgroundColor: "#f3cd18",
    justifyContent: "space-evenly"
  },
  campDetails: {
    flex: 1.15
  },
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
  },

  calenderContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    maxHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  calender: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center"
  },
  nightsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5
  },

  customerContainer: {
    flex: 1,
    maxHeight: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },

  customerType: {
    justifyContent: "space-around"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeed);

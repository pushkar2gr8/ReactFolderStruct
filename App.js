/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Router from "./Router/AppNavigator";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import { watcherSaga } from "./Sagas/Sagas";
import store from "./Stores/stores";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

import store from "../Stores/stores";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../Actions/actiontypes";
import { func } from "prop-types";

export const fetch_post = () => {
  return {
    type: API_CALL_REQUEST
  };
};

export const receive_post = post => {
  console.log("SUCCESS");
  return {
    type: API_CALL_SUCCESS,
    data: post
  };
};

export const receive_error = () => {
  return {
    type: API_CALL_FAILURE
  };
};

getData = async () => {
  console.log("Success");
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  console.log("AHAH" + JSON.stringify(data));
  return data.json();
};

export const thunk_action_creator = async () => {
  store.dispatch(fetch_post());

  try {
    await fetch("https://dog.ceo/api/breeds/image/random")
      .then(data => data.json())
      .then(response => {
        console.log("HAHAH" + response),
          store.dispatch(receive_post(JSON.stringify(response)));
      });
  } catch (error) {
    store.dispatch(receive_error());
  }
};

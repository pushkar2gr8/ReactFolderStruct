import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../Actions/actiontypes";

//reducer
initialState = {
  fetching: null,
  error: null,
  fetchedData: "NO DATA"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null
      };

    case API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetchedData: action.data
      };

    case API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        fetchedData: action.error
      };

    default:
      return state;
  }
};

export default reducer;

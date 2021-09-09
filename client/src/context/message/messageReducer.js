import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  SET_CURRENT,
  CLEAR_CURRENT,
  MESSAGE_ERROR,
  GET_MESSAGES,
  // FILTER_MESSAGES,
  // CLEAR_FILTER,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
        loading: false,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message._id !== action.payload
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

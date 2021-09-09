import React, { useReducer } from "react";
import axios from "axios";
import MessageContext from "./messageContext";
import messageReducer from "./messageReducer";
import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  MESSAGE_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_MESSAGES,
  // FILTER_MESSAGES,
  //CLEAR_FILTER,
} from "../types";

const MessageState = (props) => {
  const initialState = {
    messages: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);

  // get messages
  const getMessages = async () => {
    try {
      const res = await axios.get("/api/messages");
      dispatch({ type: GET_MESSAGES, payload: res.data });
    } catch (err) {
      dispatch({ type: MESSAGE_ERROR, payload: err.response.msg });
    }
  };

  // create message
  const createMessage = async (message) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/messages", message, config);
      dispatch({ type: CREATE_MESSAGE, payload: res.data });
    } catch (err) {
      dispatch({ type: MESSAGE_ERROR, payload: err.response.msg });
    }
  };

  // delete message
  const deleteMessage = async (id) => {
    console.log("This is DELETE in MessageState ");
    console.log(id);
    try {
      await axios.delete(`/api/messages/${id}`);
      dispatch({ type: DELETE_MESSAGE, payload: id });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // set current message
  const setCurrentMessage = (message) => {
    dispatch({ type: SET_CURRENT, payload: message });
  };

  // clear current message
  const clearCurrentMessage = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update message?

  // filter messages
  const filterMessage = () => {
    console.log("This is filter message in MessageState");
  };

  // clear filter
  const clearFilter = () => {
    console.log("This is clear filter in MessageState");
  };

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        error: state.error,
        getMessages,
        createMessage,
        deleteMessage,
        setCurrentMessage,
        clearCurrentMessage,
        filterMessage,
        clearFilter,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;

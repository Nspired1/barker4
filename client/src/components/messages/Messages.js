import React, { Fragment, useContext, useEffect } from "react";
import MessageItem from "./MessageItem";
import MessageContext from "../../context/message/messageContext";
import AlertContext from "../../context/alert/alertContext";

const Messages = () => {
  const messageContext = useContext(MessageContext);
  const alertContext = useContext(AlertContext);

  const { messages, getMessages, loading, error } = messageContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    getMessages();
    if (error === "Message not found." || error === "That is not authorized") {
      setAlert(error, "danger");
      //clearErrors();
    }
  }, []);

  return (
    <Fragment>
      {messages.map((message) => (
        <MessageItem key={message._id} message={message} />
      ))}
    </Fragment>
  );
};

export default Messages;

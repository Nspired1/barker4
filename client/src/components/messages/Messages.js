import React, { Fragment, useContext, useEffect } from "react";
import MessageItem from "./MessageItem";
import MessageContext from "../../context/message/messageContext";

const Messages = () => {
  const messageContext = useContext(MessageContext);
  const { messages, getMessages, loading } = messageContext;

  useEffect(() => {
    getMessages();
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

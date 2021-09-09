import React, { useState, useContext } from "react";
import MessageContext from "../../context/message/messageContext";

const MessageForm = () => {
  const messageContext = useContext(MessageContext);
  const { createMessage } = messageContext;
  const [message, setMessage] = useState({
    text: "",
  });

  const { text } = message;

  const onChange = (e) =>
    setMessage({ ...message, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createMessage(message);
    // clear form
    setMessage({
      text: "",
    });
  };

  return (
    <div className="card bg-light">
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">Write Message</h2>

        <textarea
          id="text"
          name="text"
          row="5"
          cols="40"
          value={text}
          placeholder="write something..."
          onChange={onChange}
        />
        <div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;

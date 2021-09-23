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
    <div className="card bg-light mb-3 mt-3" style={{ borderRadius: "25px" }}>
      <form onSubmit={onSubmit} className="mb-3 mx-3">
        <h2 className="text-primary">Bark Away...</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <textarea
            id="text"
            name="text"
            row="5"
            cols="70"
            value={text}
            placeholder="write something..."
            onChange={onChange}
            className="mb-2"
            style={{ borderRadius: "10px" }}
          />
        </div>
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

import React, { useContext } from "react";
import MessageContext from "../../context/message/messageContext";
import DefaultProfileImage from "../../images/default-profile-image.jpg";

const MessageItem = ({ message }) => {
  const messageContext = useContext(MessageContext);
  const { deleteMessage } = messageContext;
  const { _id, text, date } = message;

  const onDelete = () => {
    console.log("This is onDelete in MessageITem");
    console.log(message);
    console.log(_id);
    deleteMessage(_id);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-dark">{text}</h3>
      <h4 className="text-secondary">{date}</h4>
      <img
        src={DefaultProfileImage}
        alt="egg"
        height="100"
        width="100"
        className="mb-2"
      />
      <div className="mb-2 ">
        <button
          className="btn btn-danger btn-small"
          type="submit"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageItem;

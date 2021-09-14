import React, { Fragment, useContext } from "react";
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
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  const hour = Number(date.substring(11, 13));
  //const hour = hourNumber.toString();
  const convertHour = (hour) => {
    const time = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ];
    //const numberHour = Number(hour);
    if (hour - 7 > 23) {
      const newIndex = hour - 7 - 24;
      return time[newIndex];
    } else {
      const reverseIndex = hour - 7;
      console.log(reverseIndex);
      return time[reverseIndex];
    }
  };
  const minute = date.substring(14, 16);
  const westCoastTime = `${convertHour(hour)}:${minute}`;

  return (
    <Fragment>
      <div className="row">
        <div className="col-sm-2">
          <img
            src={DefaultProfileImage}
            alt="egg"
            height="100"
            width="100"
            className="mb-2"
          />{" "}
        </div>
        <div className="col-sm-10">
          <h3></h3>
          <h4 className="text-dark">{text}</h4>
          <h4 className="text-secondary">
            {westCoastTime} - {month}/{day}/{year}
          </h4>
          <h4>{date}</h4>
        </div>
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
    </Fragment>
  );
};

export default MessageItem;

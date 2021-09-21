import React, { Fragment, useContext } from "react";
import Moment from "react-moment";
import MessageContext from "../../context/message/messageContext";
import DefaultProfileImage from "../../images/default-profile-image.jpg";

const MessageItem = ({ message }) => {
  const messageContext = useContext(MessageContext);
  const { deleteMessage } = messageContext;
  const { _id, text, date, user } = message;
  const { username } = user;

  const onDelete = () => {
    console.log("This is onDelete in MessageITem");
    console.log(message);
    console.log(_id);
    deleteMessage(_id);
  };

  return (
    <Fragment>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={DefaultProfileImage}
              className="img-fluid rounded-start"
              alt={username}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{username}</h5>
              <p className="card-text">{text}</p>
              <p className="card-text">
                <small className="text-muted">
                  <Moment className="text-muted" format="h:mm A">
                    {date}
                  </Moment>
                </small>{" "}
                <small className="text-muted">
                  <Moment className="text-muted" format="Do MMM YYYY">
                    {date}
                  </Moment>
                </small>
              </p>
            </div>
            <div className="mb-2 ">
              <button
                className="btn btn-outline-danger btn-small "
                style={{ position: "relative", left: 20 }}
                type="submit"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
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
          <div>
            <h4 className="text-dark">{text}</h4>
            <span className="text-muted">
              <Moment className="text-muted" format="h:mm A">
                {date}
              </Moment>
            </span>{" "}
            <span className="text-muted">
              <Moment className="text-muted" format="Do MMM YYYY">
                {date}
              </Moment>
            </span>
          </div>
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
        
      </div> */}
    </Fragment>
  );
};

export default MessageItem;

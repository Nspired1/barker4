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
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", borderRadius: "25px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={DefaultProfileImage}
              // className="img-fluid rounded-start"
              style={{
                borderRadius: "25px",
                height: "150px",
                width: "150px",
                margin: "10px 20px 10px 20px",
              }}
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
            <span style={{ display: "flex", justifyContent: "flex-start" }}>
              <div className="mb-2 ">
                <button
                  className="btn btn-outline-success btn-small "
                  style={{ position: "relative", left: 10 }}
                >
                  Reply
                </button>
              </div>
              <div className="mb-2 ">
                <button
                  className="btn btn-outline-primary btn-small "
                  style={{ position: "relative", left: 20 }}
                >
                  ReBark
                </button>
              </div>
              <div className="mb-2 ">
                <button
                  className="btn btn-outline-secondary btn-small "
                  style={{ position: "relative", left: 30 }}
                >
                  Like
                </button>
              </div>
              <div className="mb-2 ">
                <button
                  className="btn btn-outline-danger btn-small "
                  style={{ position: "relative", left: 40 }}
                  type="submit"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            </span>
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

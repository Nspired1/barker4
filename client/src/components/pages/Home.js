import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Messages from "../messages/Messages";
import MessageForm from "../messages/MessageForm";

import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // elsint-disable-next-line
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="landing-main">
        <h1>What's Happening?</h1>
        <Link to="/register" className="btn btn-outline-light">
          Find Out!
        </Link>
      </div>
    );
  }

  return (
    <div>
      <MessageForm />
      <Messages />
    </div>
  );
};

export default Home;

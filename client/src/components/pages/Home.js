import React, { useContext, useEffect } from "react";
import Messages from "../messages/Messages";
import MessageForm from "../messages/MessageForm";

import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // elsint-disable-next-line
  }, []);

  return (
    <div>
      <h2>This is Home</h2>

      <MessageForm />
      <Messages />
    </div>
  );
};

export default Home;

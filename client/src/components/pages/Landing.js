import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-main">
      <h1>What's Happening?</h1>

      <Link to="/register" className="btn btn-outline-light">
        Find Out!
      </Link>
      <h3>Join Barker today.</h3>
      <div>
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default Landing;

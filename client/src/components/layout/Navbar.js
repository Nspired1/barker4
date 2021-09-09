// eslint-disable-next-line
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
//import { faPaw, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;
  //const { isAuthenticated, logout, user } = authContext;

  // const authLinks = (
  //   <Fragment>
  //     <li>Hello {user && user.name}</li>
  //     <li>
  //       <a href="#!">
  //         <FontAwesomeIcon icon={faSignOutAlt} />
  //         Logout
  //       </a>
  //     </li>
  //   </Fragment>
  // );

  // const guestLinks = (
  //   <Fragment>
  //     <li>
  //       <Link to="/register">Register</Link>
  //     </li>
  //     <li>
  //       <Link to="/login">Login </Link>{" "}
  //     </li>{" "}
  //   </Fragment>
  // );

  const onLogout = () => {
    logout();
  };

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <h1>
              <FontAwesomeIcon icon={faPaw} /> Barker
            </h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <a href="#!" className="nav-link" onClick={onLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

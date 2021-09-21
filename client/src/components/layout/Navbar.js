// eslint-disable-next-line
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/home" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-link">Hello {user && user.name}</li>
      <li className="nav-item">
        <a onClick={onLogout} href="#!" className="nav-link">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login{" "}
        </Link>{" "}
      </li>{" "}
    </Fragment>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <h1>
            <FontAwesomeIcon icon={faPaw} /> Barker
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isAuthenticated ? authLinks : guestLinks}
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
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
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

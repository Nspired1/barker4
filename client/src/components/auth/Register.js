import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const { name, email, username, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists.") {
      setAlert(error, "danger");
      clearErrors();
    }
    // elsint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all required fields", "danger");
    } else {
      register({
        name,
        username,
        email,
        password,
      });
    }

    console.log("Register submit");
  };

  return (
    <div className="form-container">
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            required
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            required
            minLength="6"
            value={password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          value="register"
          className="btn btn-primary btn-block"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

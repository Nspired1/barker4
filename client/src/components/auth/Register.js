import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
//import FileUpload from "./FileUpload";
import axios from "axios";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  // const [profileImage, setProfileImage] = useState("");

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

  //const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("This is Register component name & profileImage");
    // console.log(profileImage);
    console.log("This is onSubmit event");
    console.log(e);
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all required fields", "danger");
    } else {
      const formData = new FormData();
      // formData.append("profileImage", profileImage);
      console.log("This is formData in onSubmit of Register Component");
      console.log(formData);

      register({
        name,
        email,
        username,
        password,
        // formData,
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
        {/* <div className="form-group mb-3">
          <label htmlFor="profileImage" className="form-label">
            Profile Image
          </label>
          <input
            type="file"
            name="profileImage"
            className="form-control"
            id="profileImage"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div> */}
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

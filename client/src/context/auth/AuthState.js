import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  IMAGE_UPLOAD,
  IMAGE_ERROR,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(`/api/auth`);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // register user
  const register = async (formData) => {
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    // const profileImage = formData.get("profileImage");

    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // const res = await axios.post("api/users", formData, config);

      const res = await axios({
        url: "api/users",
        method: "post",
        data: {
          name,
          username,
          email,
          password,
          // profileImage,
        },
        // formData,
        config,
      });

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // upload user profileImage;
  const uploadImage = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post("api/auth", formData, config);
      dispatch({
        type: IMAGE_UPLOAD,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: IMAGE_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  // login user
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/auth", formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // logout
  const logout = () => dispatch({ type: LOGOUT });

  // clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
        uploadImage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

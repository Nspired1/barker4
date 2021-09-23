import "./App.css";
// import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageState from "./context/message/MessageState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import WithAuth from "./components/routing/WithAuth";
import ImageUpload from "./components/auth/ImageUpload";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <MessageState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Landing} />
                <WithAuth exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/upload" component={ImageUpload} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </MessageState>
    </AuthState>
  );
};

export default App;

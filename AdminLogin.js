import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Basic from "../formick/Formick";
import PrimarySearchAppBar from "./Navbar";

function AdminLogin() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });


  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });

  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div>
      <PrimarySearchAppBar/>
    <div className="login-register-wrapper top">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#"></a>
      </animated.div>
    </div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
     <Basic/>
    </React.Fragment>
  );
}

export default AdminLogin;


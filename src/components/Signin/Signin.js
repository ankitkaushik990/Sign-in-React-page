import React from "react";
import "./signin.css";
export const Signin = () => {
  return (
    <div className="sign-in-body">
      <div className="signin-right-container">
        <h1 id="welcome-txt">Welcome Back</h1>
        <button id="create-acc-btn">Create Account</button>
      </div>
      <div className="signin-left-container">
        <h1 id="sign-in-txt">Sign In!</h1>
        <div className="sign-in-form">
          <form>
            <label for="fname">Email:</label>
            <input type="text" id="fname" name="fname"></input>
            <br />
            <label for="lname">Password:</label>
            <input type="text" id="lname" name="lname"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

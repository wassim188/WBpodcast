import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function Login() {
  return (
    <div className="loginView ">
      <div className="container ">
        <div className="child w-[400px]">
          <h1>Welcome back</h1>
          <p>Please enter your details</p>
          <form action="">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxlength="16"
              placeholder="Enter Your Password"
              required
            />
            <div className="wrapper">
              <input
                type="checkbox"
                name="remember"
                id="remember-me"
                class="checkmark"
                checked
              />
            </div>
            <button className="button-login" type="submit">
              Sign In
            </button>
            <p>
              Don't have an account?{" "}
              <button className="button-signUp">
                <Link to="/sign-up" style={{all:"unset"}}>Sign Up</Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

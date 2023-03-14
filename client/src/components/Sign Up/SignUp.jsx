import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import "./Sign.css";
function SignUp() {
  const [value, setValue] = React.useState("User");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [narrator, setNarrator] = useState("");
  const handleUserRegister = () => {
    axios
      .post("/api/user/register", user)
      .then((res) => console.log(res))
      .catch((err) =>{
        if (err.response.data.error)
        setError(err.response.data.error);
      });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="loginView">
      <div className="container">
        <div className="child w-[400px]">
          <h1>Welcome back</h1>

          {value === "User" ? (
            <>
              <Form>
                <Form.Field>
                  Selected value as a : <b>{value}</b>
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label="I am a user"
                    name="checkboxRadioGroup"
                    value="User"
                    checked={value === "User"}
                    onChange={(e, data) => setValue(data.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label="I am a narrator"
                    name="checkboxRadioGroup"
                    value="Narrator"
                    checked={value === "Narrator"}
                    onChange={(e, data) => setValue(data.value)}
                  />
                </Form.Field>
              </Form>
              <form
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <p>Please enter your details</p>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder=" Email"
                  required
                  name="email"
                />
                <label htmlFor="email">Username</label>
                <input
                  type="username"
                  id="email"
                  placeholder="Username"
                  required
                  name="userName"
                />
                <h4>{error}</h4>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  maxlength="16"
                  placeholder=" Password"
                  required
                  name="password"
                />
                <label htmlFor="password">Confirm your password</label>
                <input
                  type="password"
                  id="password"
                  maxlength="16"
                  placeholder="Confirm Your Password"
                  required
                  name="confirm_password"
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
                <button
                  onClick={() => {
                    handleUserRegister();
                  }}
                  className="button-login"
                  
                >
                  Sign Up
                </button>
                <p>
                  If you have an account?{" "}
                  <button className="button-signUp">
                    <Link to="/login" style={{ all: "unset" }}>
                      Sign In
                    </Link>
                  </button>
                </p>
              </form>
            </>
          ) : (
            <>
              <Form>
                <Form.Field>
                  Selected value as a : <b>{value}</b>
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label="I am a user"
                    name="checkboxRadioGroup"
                    value="User"
                    checked={value === "User"}
                    onChange={(e, data) => setValue(data.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label="I am a narrator"
                    name="checkboxRadioGroup"
                    value="Narrator"
                    checked={value === "Narrator"}
                    onChange={(e, data) => setValue(data.value)}
                  />
                </Form.Field>
              </Form>
              <form action="">
                <p>Please enter your details</p>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" placeholder=" Email" required />
                <label htmlFor="email">FullName</label>
                <input
                  type="username"
                  id="email"
                  placeholder="FullName"
                  required
                />
                <label htmlFor="email">Bio</label>
                <input type="username" id="email" placeholder="Bio" required />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  maxlength="16"
                  placeholder=" Password"
                  required
                />
                <label htmlFor="password">Confirm your password</label>
                <input
                  type="password"
                  id="password"
                  maxlength="16"
                  placeholder="Confirm Your Password"
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
                  Sign Up
                </button>
                <p>
                  If you have an account?{" "}
                  <button className="button-signUp">
                    <Link to="/login" style={{ all: "unset" }}>
                      Sign In
                    </Link>
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;

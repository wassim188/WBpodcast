import React from "react";
import { useState } from "react";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { Button, Group, TextInput, PasswordInput, Box } from "@mantine/core";
import "./Sign.css";
import { Link } from "react-router-dom";
import { Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

function Register() {
  const form = useForm({
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        "Enter a valid hex color"
      ),
      age: isInRange(
        { min: 18, max: 99 },
        "You must be 18-99 years old to register"
      ),
    },
  });
  const [value, setValue] = React.useState("User");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [narrator, setNarrator] = useState("");
  const handleUserRegister = () => {
    axios
      .post("/api/user/register", user)
      .then((res) => console.log(res))
      .catch((err) => {
        if (err.response.data.error) setError(err.response.data.error);
      });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginView">
      <Box
        className="register-container"
        component="form"
        maw={400}
        mx="auto"
        onSubmit={form.onSubmit(() => {})}
      >
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
            <p>Please enter your details</p>
            <Form
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <TextInput
                label="userName"
                placeholder="userName"
                name="userName"
                withAsterisk
                {...form.getInputProps("name")}
              />
              <h6>{error}</h6>
              <TextInput
                label="Your email"
                placeholder="Your email"
                name="email"
                withAsterisk
                mt="md"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                name="password"
                label="Password"
                placeholder="Password"
                mt="md"
              />
              <PasswordInput
                mt="sm"
                name="confirm_password"
                label="Confirm password"
                placeholder="Confirm password"
              />

              <Group position="center" mt="md">
                <Button
                  onClick={() => {
                    handleUserRegister();
                  }}
                  className="button-login"
                  color="orange.3"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Group>
              <p>
                Don't have an account?{" "}
                <Button className="Button-signUp" color="orange.3">
                  <Link to="/login" style={{ all: "unset" }}>
                    Sign In
                  </Link>
                </Button>
              </p>
            </Form>
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
            <p>Please enter your details</p>
            <Form>
              <TextInput
                label="narratorName"
                placeholder="userName"
                name="narratorName"
                withAsterisk
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Your email"
                placeholder="Your email"
                name="email"
                withAsterisk
                mt="md"
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Bio"
                name="bio"
                placeholder="Bio"
                withAsterisk
                mt="md"
                {...form.getInputProps("favoriteColor")}
              />
              <PasswordInput
                name="password"
                label="Password"
                placeholder="Password"
                mt="md"
              />
              <PasswordInput
                name="confirm-password"
                mt="sm"
                label="Confirm password"
                placeholder="Confirm password"
              />

              <Group position="center" mt="md">
                <Button className="button-login" color="orange.3" type="submit">
                  Sign Up
                </Button>
              </Group>
              <p>
                Don't have an account?{" "}
                <Button className="Button-signUp" color="orange.3">
                  <Link to="/login" style={{ all: "unset" }}>
                    Sign In
                  </Link>
                </Button>
              </p>
            </Form>
          </>
        )}
      </Box>
    </div>
  );
}

export default Register;

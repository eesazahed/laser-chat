import { useState } from "react";
import { newUser } from "../firebase/newUser";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setUsernameValue = (e) => setUsername(e.target.value);
  const setEmailValue = (e) => setEmail(e.target.value);
  const setPasswordValue = (e) => setPassword(e.target.value);
  const submitSignUp = (e) =>
    newUser({ username: username, email: email, password: password });

  return (
    <div className="form-wrapper">
      <button type="button" className="switcher switcher-signup">
        Sign Up
        <span className="underline"></span>
      </button>
      <div className="form form-signup">
        <fieldset>
          <legend>
            Please enter your username, email, password and password
            confirmation for sign up.
          </legend>
          <div className="input-block">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="signup-username"
              placeholder="Username"
              onChange={setUsernameValue}
              value={username}
            />
          </div>
          <div className="input-block">
            <label htmlFor="signup_email">Email Address</label>
            <input
              type="email"
              id="signup-email"
              placeholder="Email"
              onChange={setEmailValue}
              value={email}
            />
          </div>
          <div className="input-block">
            <label htmlFor="signup_password">Password</label>
            <input
              type="password"
              id="signup-password"
              placeholder="Password"
              onChange={setPasswordValue}
              value={password}
            />
          </div>
        </fieldset>
        <p id="signup-msg"></p>
        <button className="btn-signup" type="submit" onClick={submitSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

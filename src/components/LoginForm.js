import { useState } from "react";
import { loginUser } from "../firebase/loginUser";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setEmailValue = (e) => setEmail(e.target.value);
  const setPasswordValue = (e) => setPassword(e.target.value);
  const submitLogin = (e) => loginUser(email, password);

  return (
    <div className="form-wrapper is-active">
      <button type="button" className="switcher switcher-login">
        Login
        <span className="underline"></span>
      </button>
      <div className="form form-login">
        <fieldset>
          <legend>Please enter your email and password for login.</legend>
          <div className="input-block">
            <label htmlFor="login_email">Email Address</label>
            <input
              type="email"
              id="login-email"
              placeholder="Email"
              onChange={setEmailValue}
              value={email}
            />
          </div>
          <div className="input-block">
            <label htmlFor="login_password">Password</label>
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              onChange={setPasswordValue}
              value={password}
            />
          </div>
        </fieldset>
        <p id="login-msg"></p>
        <button className="btn-login" type="submit" onClick={submitLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

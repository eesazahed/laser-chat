import "../css/Register.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import React, { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    const switchers = document.querySelectorAll(".switcher");

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
        document.getElementById("error_msg").innerHTML = "";
        document.getElementById("login_msg").innerHTML = "";
      });
    });
  }, []);

  return (
    <section className="forms-section">
      <h1 className="section-title">
        Welcome to Laser, <br /> A platform for cool people.
      </h1>
      <div className="forms">
        <LoginForm />
        <SignUpForm />
      </div>
    </section>
  );
}

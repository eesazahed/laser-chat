import { auth } from "./config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = (email, password) => {
  const tellUser = (message) =>
    (document.getElementById("login-msg").innerHTML = message);

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      tellUser("Thank you!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      if (errorMessage === "Firebase: Error (auth/invalid-email).") {
        tellUser("Invalid email address.");
      } else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
        tellUser("Account does not exist with this email address.");
      } else if (
        password.length < 6 ||
        errorMessage === "Firebase: Error (auth/wrong-password)."
      ) {
        tellUser("Invalid password.");
      } else {
        tellUser(errorMessage);
      }
    });
};

import { db, auth } from "./config";
import { set, ref } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const newUser = (userInputs) => {
  const tellUser = (message) =>
    (document.getElementById("signup-msg").innerHTML = message);

  if (
    userInputs.username.length < 4 ||
    userInputs.username.length > 14 ||
    userInputs.username.includes(" ") ||
    /^[a-zA-Z0-9]+$/.test(userInputs.username) === false
  ) {
    tellUser(
      "Username must be between 4-15 characters in length and can only include numbers and letters."
    );
  } else {
    createUserWithEmailAndPassword(auth, userInputs.email, userInputs.password)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          username: userInputs.username,
          email: userInputs.email,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          tellUser("Invalid email address.");
        } else if (
          errorMessage === "Firebase: Error (auth/email-already-in-use)."
        ) {
          tellUser("Account already exists with this email address.");
        } else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          tellUser("Account does not exist with this email address.");
        } else if (
          errorMessage ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          tellUser("Password must be more than 6 characters");
        } else if (userInputs.password.length === 0) {
          tellUser("Invalid password.");
        } else {
          tellUser(errorMessage);
        }
      });
  }
};

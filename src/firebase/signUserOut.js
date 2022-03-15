import { auth } from "./config";
import { signOut } from "firebase/auth";

export const signUserOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Signed Out");
      document.location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      const error_msg = document.getElementById("message-error");
      error_msg.innerHTML = errorMessage;
    });
};

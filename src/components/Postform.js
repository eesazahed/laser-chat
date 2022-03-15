import { useState } from "react";
import { addMessage } from "../firebase/addMessage";

export default function Postform(props) {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const setMessageValue = (e) => setMessage(e.target.value);

  const postMessage = (e) => {
    e.preventDefault();
    if ((message.length > 0) & (message.length < 100)) {
      addMessage(props.username, message);
      setMessage("");
      setErrorMsg("");
    } else setErrorMsg("Please say something between 1-99 characters.");
  };

  return (
    <div className="postform">
      {props.username}:{" "}
      <input
        className="form-control"
        type="text"
        placeholder="say something"
        required
        onChange={setMessageValue}
        value={message}
      />{" "}
      <button type="submit" onClick={postMessage}>
        Send
      </button>
      <br />
      <p id="message-error">{errorMsg}</p>
    </div>
  );
}

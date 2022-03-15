import "../css/Homepage.css";
import SignOut from "./SignOutButton";
import Postfeed from "./Postfeed";
import Postform from "./Postform";
import Darkmode from "./Darkmode";

export default function Homepage(props) {
  if (props.username) {
    return (
      <div className="homepage">
        <div className="homepage-title">
          <h1>You're signed in as {props.username}</h1> <SignOut /> <Darkmode />
        </div>
        <Postfeed />
        <Postform username={props.username} />
      </div>
    );
  } else {
    return <div className="homepage">Loading...</div>;
  }
}

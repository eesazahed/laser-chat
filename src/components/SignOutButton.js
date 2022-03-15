import { signUserOut } from "../firebase/signUserOut";

export default function SignOut() {
  return (
    <button className="signOutButton" onClick={signUserOut}>
      Sign Out
    </button>
  );
}

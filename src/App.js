import Homepage from "./components/Homepage";
import { useAuthListener } from "./firebase/useAuthListener";
import Register from "./components/Register";

function App() {
  const { username } = useAuthListener();

  if (username) {
    return (
      <div className="App">
        <Homepage username={username} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;

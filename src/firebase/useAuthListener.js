import { db, auth } from "./config";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";

export const useAuthListener = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        get(ref(db, "users/" + authUser.uid)).then((snapshot) => {
          if (snapshot.exists()) {
            setUsername(snapshot.val().username);
          }
        });
      } else {
        setUsername(null);
      }
    });

    return () => listener();
  }, []);

  return { username };
};

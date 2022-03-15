import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Hello. Please look over the README for full instructions for setting up a chat server.
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export { db, auth };

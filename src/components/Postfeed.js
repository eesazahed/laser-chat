import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { ref, get } from "firebase/database";
import Post from "./Post";

export default function Postfeed() {
  const [feed, updateFeed] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      get(ref(db, "allposts"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            updateFeed(snapshot.val());
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (feed.postfeed) {
    return (
      <div className="postfeed">
        <span id="newest-feed"></span>
        <a id="down-button" href="#newest-feed">
          <i className="fa fa-arrow-down"></i>
        </a>
        <Post value={feed.postfeed} />
      </div>
    );
  } else {
    return <div className="postfeed">No posts here.</div>;
  }
}

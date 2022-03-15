export default function Post(props) {
  return (
    <>
      {props.value
        .map((post) => (
          <div className="post" key={post.key}>
            <p className="usernameDisplay">
              {post.username}{" "}
              <span className="timeDisplay">{post.timestamp}</span>
            </p>
            <p className="postDisplay">{post.post}</p>
          </div>
        ))
        .reverse()}
    </>
  );
}

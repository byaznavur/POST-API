import axios from "axios";
import { useState } from "react";

const PostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { userId, body, title };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;

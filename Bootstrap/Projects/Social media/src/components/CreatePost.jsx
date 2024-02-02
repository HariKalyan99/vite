import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../App.module.css";
import { useContext, useRef } from "react";
import { PostListStoreContext } from "../store/PostListStore";

const CreatePost = () => {
  const postuserId = useRef("");
  const postTitle = useRef("");
  const postBody = useRef("");
  const postReactions = useRef("");
  const postTags = useRef("");

  const { addPost } = useContext(PostListStoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = postuserId.current.value;
    const title = postTitle.current.value;
    const body = postBody.current.value;
    const reactions = postReactions.current.value;
    const tags = postTags.current.value.split(" ");
    postuserId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = [];

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
    .then((res) => res.json())
    .then((data) => addPost(data));
    // addPost(userId, title, body, reactions, tags);
  };
  return (
    <form className={styles.createPost} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
          ref={postuserId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
          ref={postTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          ref={postBody}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many of them reacted to your post"
          ref={postReactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter your tags using space"
          ref={postTags}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

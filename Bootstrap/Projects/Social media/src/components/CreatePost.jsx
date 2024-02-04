import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../routes/App.module.css';
import { Form, redirect } from "react-router-dom";
// import { useContext, useRef } from "react";
// import { PostListStoreContext } from "../store/PostListStore";
// import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const postuserId = useRef("");
  // const postTitle = useRef("");
  // const postBody = useRef("");
  // const postReactions = useRef("");
  // const postTags = useRef("");

  // const { addPost } = useContext(PostListStoreContext);
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // const userId = postuserId.current.value;
    // const title = postTitle.current.value;
    // const body = postBody.current.value;
    // const reactions = postReactions.current.value;
    // const tags = postTags.current.value.split(" ");
    // postuserId.current.value = "";
    // postTitle.current.value = "";
    // postBody.current.value = "";
    // postReactions.current.value = "";
    // postTags.current.value = [];

    // fetch("https://dummyjson.com/posts/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     title: title,
    //     body: body,
    //     reactions: reactions,
    //     userId: userId,
    //     tags: tags,
    //   }),
    // })
    // .then((res) => res.json())
    // .then((data) => {addPost(data);
    // navigate("/")});
    // addPost(userId, title, body, reactions, tags);
  // };
  return (
    <Form method="POST" className={styles.createPost}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
          name={"userId"}
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
          name={"title"}
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
          name={"body"}
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
          name={"reactions"}
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
          name={"tags"}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};



export const createPostAction = async(data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ")
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
    .then((res) => res.json())
    .then((data) => {console.log(data);
    });
  return redirect("/");
}

export default CreatePost;

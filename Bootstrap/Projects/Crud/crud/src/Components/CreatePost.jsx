import React, { useContext, useRef } from "react";
import { StorePostList } from "../Store/Store";

const CreatePost = () => {

  const {addPost, selectedTab} = useContext(StorePostList)

    const postId = useRef("");
    const postTitle = useRef("");
    const postBody = useRef("");
    const postTag = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // const tagArr = postTag.current.value.split(" "); TAGS ARE CONVERTED IN THE BODY OF THE POST REQUEST
        fetch('https://dummyjson.com/posts/add', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            title: postTitle.current.value,
            body: postBody.current.value,
            userId: postId.current.value,
            tags: postTag.current.value,
          })
        }).then((res) => res.json()).then((data) =>addPost(data))
        // addPost(postId.current.value, postTitle.current.value, postBody.current.value, tagArr, uuidv4())
        postId.current.value = ""; postTitle.current.value = ""; postBody.current.value = ""; postTag.current.value = "";
    }

  return (
    <>
    {selectedTab === "Home" && <div>
      <form className={"createPostContainer"} onSubmit={handleSubmit}>
        <h1>User ID</h1>
        <input type="text" ref={postId} placeholder="Add a number for userId between 0-99"/>
        <h1>Add Title</h1>
        <input type="text" ref={postTitle} placeholder="Add a title"/>
        <h1>Add your Story</h1>
        <textarea rows={4} cols={40} ref={postBody} placeholder="Add your story"/>
        <h1>Tags</h1>
        <input type="text" ref={postTag} placeholder="Add tags with spaces"/>
        <button
          style={{
            height: "60px",
            border: "none",
            backgroundColor: "var(--color-primary)",
          }}
        >
          Post
        </button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <button
          style={{ height: "60px", border: "none", backgroundColor: "clear" }} onClick={() => {
            postId.current.value = ""; postTitle.current.value = ""; postBody.current.value = ""; postTag.current.value = "";
          }}
        >
          Clear
        </button>
      </div>
    </div>}
    </>
  );
};

export default CreatePost;

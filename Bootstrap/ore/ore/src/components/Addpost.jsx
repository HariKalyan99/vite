import React, {useRef } from "react";

const Addpost = ({addPost}) => {

    let postUserId = useRef("");
    let postTitle = useRef("");
    let postBody = useRef("");
    let postReactions = useRef("");
    let postTags = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = postUserId.current.value;
        const title = postTitle.current.value;
        const body = postBody.current.value;
        const reactions = postReactions.current.value;
        const tagsArr = postTags.current.value;
        const tags = tagsArr.split(" ");
        addPost(userId, title, body, reactions, tags)
        postUserId.current.value = "";
        postTitle.current.value = "";
        postBody.current.value = "";
        postReactions.current.value = "";
        postTags.current.value = "";
    }

  return (
    <form className="formContainer" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="h8 m-3 fw-normal">Add your post</h1>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          ref={postUserId}
        />
        <label htmlFor="floatingInput">Enter your UserId</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Title of your post"
          ref={postTitle}
        />
        <label htmlFor="floatingInput">Title of your post</label>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          ref={postBody}
        ></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Reactions"
          ref={postReactions}
        />
        <label htmlFor="floatingPassword">Reactions</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Tags"
          ref={postTags}
        />
        <label htmlFor="floatingPassword">Tags</label>
      </div>
      <button className="btn btn-warning w-100 py-2" type="submit">
        Post
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  );
};

export default Addpost;

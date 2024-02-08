import React, { useContext, useRef, useState } from 'react'
import { oreStore } from '../store/Store';

const Editpost = ({post, children, setDisplayEdit}) => {
    let postUserId = useRef("");
    let postTitle = useRef("");
    let postBody = useRef("");
    let postReactions = useRef("");
    let postTags = useRef("");

    const {editPost} = useContext(oreStore);


    const [getUserId, setUserId] = useState(post.userId);
    const [getTitle, setTitle] = useState(post.title);
    const [getBody, setBody] = useState(post.body);
    const [getReactions, setReactions] = useState(post.reactions);
    const [getTags, setTags] = useState(post.tags);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = postUserId.current.value;
        const title = postTitle.current.value;
        const body = postBody.current.value;
        const reactions = postReactions.current.value;
        const tagsArr = postTags.current.value;
        const tags = tagsArr.split(",");
        editPost(userId, title, body, reactions, tags, post.id)
        setDisplayEdit(false)
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
              value={getUserId}
              onChange={(e) => setUserId(e.target.value)}
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
              value={getTitle}
              onChange={(e) => setTitle(e.target.value)}
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
              value={getBody}
              onChange={(e) => setBody(e.target.value)}
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
              value={getReactions}
              onChange={(e) => setReactions(e.target.value)}
              ref={postReactions}
            />
            <label htmlFor="floatingInput">Reactions</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Tags"
              value={getTags}
              onChange={(e) => setTags(e.target.value)}
              ref={postTags}
            />
            <label htmlFor="floatingInput">Tags</label>
          </div>
          <button className="btn btn-warning w-100 py-2" type="submit">
            Post
          </button>
          {children}
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      );
}

export default Editpost
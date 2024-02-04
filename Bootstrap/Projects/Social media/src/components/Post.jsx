import React, { useContext } from "react";
import styles from '../routes/App.module.css';
import { MdDelete } from "react-icons/md";
import { PostListStoreContext } from "../store/PostListStore";

const Post = ({ post }) => {
  const {deletePost} =  useContext(PostListStoreContext);

  return (
    <div className={`card ${styles["post-card"]}`} style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.userId)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, ind) => (
          <span
            key={ind}
            className={`badge text-bg-primary ${styles["hashTag"]}`}
          >
            {tag}
          </span>
        ))}
        <div className={`alert alert-success ${styles.reactions}`} role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};

export default Post;

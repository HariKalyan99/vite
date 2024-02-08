import React from "react";

const Post = ({ post, deletePost }) => {
  return (
    <div className="col postBox">
      <div
        className="card shadow-sm"
        style={{ "minWidth": "300px", "minHeight": "400px" }}
      >
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
          {post.reactions}
          <span class="visually-hidden">unread messages</span>
        </span>
        <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill " onClick={() => deletePost(post.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
          <span class="visually-hidden">unread messages</span>
        </span>
        <div className="card-body">
          <h3>{post.title}</h3>
          <p className="card-text">{post.body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {post.tags.map((tag, ind) => {
                return (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    key={ind}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
            <small className="text-body-secondary">userId:{post.userId}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

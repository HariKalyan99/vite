import React, { useContext } from 'react'
import { StorePostList } from '../Store/Store'

export const Posts = ({post}) => {
  const {deletePost} = useContext(StorePostList);

  return (
    <div className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1>{post.title}</h1>
                <p className="card-text">
                  {post.body}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    {post.tags.map((ele, ind) => (
                      <button key={ind}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      #{ele}
                    </button>
                    ))}
                  </div>
                  <small className="text-body-secondary">{post.userId}</small>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
  )
}

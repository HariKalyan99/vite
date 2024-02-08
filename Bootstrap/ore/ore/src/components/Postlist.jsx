import React from 'react'
import Post from './Post'



const Postlist = ({postData, deletePost}) => {
  return (
    <div className="album mx-5" style={{padding: "6rem"}}>
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {postData.map((post) => {
            return <Post key={post.id} post={post} deletePost={deletePost}/>
        })}
      </div>
    </div>
  </div>
  )
}

export default Postlist


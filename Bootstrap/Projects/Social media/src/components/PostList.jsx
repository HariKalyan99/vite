import React, { useContext } from "react";
import Post from "./Post";
import { PostListStoreContext } from "../store/PostListStore";

const PostList = () => {

  const {postList} = useContext(PostListStoreContext)

  // console.log(postList);

  return (
    <>
    {postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
};

export default PostList;

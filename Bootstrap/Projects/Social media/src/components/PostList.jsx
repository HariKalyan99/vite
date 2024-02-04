import React, { useContext, useEffect, useState} from "react";
import Post from "./Post";
// import { PostListStoreContext } from "../store/PostListStore";
import WelcomeMeassage from "./WelcomeMeassage";
// import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {

  // const {postList} = useContext(PostListStoreContext);
  // const [dataFetched, setDataFetched] = useState(false);
  const postList = useLoaderData();



  return (
    <>
    {postList.length === 0 && <WelcomeMeassage />}
    { postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
};

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
  .then((res) => res.json())
  .then((data) => {
    return data.posts
  });
}

export default PostList;

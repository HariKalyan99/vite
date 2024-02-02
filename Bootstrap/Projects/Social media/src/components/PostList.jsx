import React, { useContext, useEffect, useState} from "react";
import Post from "./Post";
import { PostListStoreContext } from "../store/PostListStore";
import WelcomeMeassage from "./WelcomeMeassage";
import Loading from "./Loading";

const PostList = () => {

  const {postList, fetching} = useContext(PostListStoreContext);
  // const [dataFetched, setDataFetched] = useState(false);



  return (
    <>
    {fetching ? <Loading /> : postList.length === 0 && <WelcomeMeassage />}
    {!fetching && postList.map((post) => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  );
};

export default PostList;

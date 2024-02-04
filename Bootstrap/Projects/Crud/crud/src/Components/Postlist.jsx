import React, { useContext } from "react";
import { Posts } from "./Posts";
import { StorePostList } from "../Store/Store";

const Postlist = () => {

    const {postData, selectedTab, loading} = useContext(StorePostList)
  return (
    <>
    {loading && <div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
    {postData.length !== 0 && selectedTab === "Post" ? <div className="album p-5 bg-body-tertiary">
       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postData.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div> : null}
    </>
  );
};

export default Postlist;

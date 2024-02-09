import React, { useContext } from "react";
import Post from "./Post";
import { oreStore } from "../store/Store";

const Postlist = () => {
  const { postData } = useContext(oreStore);

  return (
    <div className="album mx-5" style={{ padding: "6rem" }}>
      {postData.length === 0 ? (
        <>
          <center
            class="spinner-border"
            style={{width : "3rem", height: "3rem"}}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </center>
          <center
            class="spinner-grow"
            style={{width : "3rem", height: "3rem"}}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </center>
        </>
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {postData.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Postlist;

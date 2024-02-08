import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Postlist from "./components/Postlist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Addpost from "./components/Addpost";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchApi(signal);

    return () => {
      controller.abort();
    };
  }, []);

  const fetchApi = async (signal) => {
    const { data } = await axios.get("https://dummyjson.com/posts", signal);
    const { posts } = data;
    setPostData(posts);
  };

  const addPost = async (userId, title, body, reactions, tags) => {
    const { data } = await axios.post(
      "https://dummyjson.com/posts/add",
      {
        title: title,
        body: body,
        userId: userId,
        tags: tags,
        reactions: reactions,
      },
    );
    setPostData([data, ...postData])
  };

  const deletePost = (id) => {
    const newPostData = postData.filter((post) => post.id !== id);
    setPostData(newPostData);
  };

  return (
    <div>
      <Navbar selectedTab={selectedTab}/>
      <div className="contain">
        {selectedTab === "Post" && (
          <Postlist postData={postData} deletePost={deletePost} />
        )}
        {selectedTab === "Home" && <Addpost addPost={addPost} />}
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

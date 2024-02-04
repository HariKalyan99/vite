import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styles from "./App.module.css";
// import CreatePost from "../components/CreatePost";
// import PostList from "../components/PostList";
import { useState } from "react";
import PostListStoreContextProvider from "../store/PostListStore";
import { Outlet } from "react-router-dom";

function App() {
  // const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListStoreContextProvider>
      <div className={styles.mainContainer}>
        <Sidebar
        ></Sidebar>
        <div className={styles.content}>
          <Header></Header>
          {/* {selectedTab === "Home" && <PostList></PostList>}
          {selectedTab === "Create Post" && <CreatePost></CreatePost>} */}
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListStoreContextProvider>
  );
}

export default App;

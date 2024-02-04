import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Postlist from "./Components/Postlist";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./Components/CreatePost";
import StorePostListProvider from "./Store/Store";

function App() {
  return (
    <StorePostListProvider>
      <Navbar />
      <div className="inside">
        <Sidebar />
        <CreatePost />
        <Postlist />
      </div>
      <Footer />
    </StorePostListProvider>
  );
}

export default App;

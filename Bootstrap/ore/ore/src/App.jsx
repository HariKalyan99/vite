import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Postlist from "./components/Postlist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Addpost from "./components/Addpost";
import OreStoreContextProvider from "./store/Store";
function App() {
  return (
    <OreStoreContextProvider>
      <Navbar />
      <div className="contain">
        <Postlist />
        <Addpost />
        <Sidebar />
      </div>
      <Footer />
    </OreStoreContextProvider>
  );
}

export default App;

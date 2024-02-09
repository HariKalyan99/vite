import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Postlist from "../components/Postlist";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// import Addpost from "../components/Addpost";
import OreStoreContextProvider from "../store/Store";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <OreStoreContextProvider>
      <Navbar />
      <div className="contain">
        <Outlet />
        <Sidebar />
      </div>
      <Footer />
    </OreStoreContextProvider>
  );
}

export default App;

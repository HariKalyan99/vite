import Navigation from "./components/Navigation"
import Sidebar from "./components/Sidebar"
import './App.css';
import {  useState } from "react";
import Footer from "./components/Footer";
import FeatureStory from "./components/FeatureStory";
import AddStory from "./components/AddStory";
import StoreStoriesProvider from "./store/StoreStories";




function App() {
  const [getActiveTab, setActiveTab] = useState("Add story");

  return (
    <StoreStoriesProvider>
      <Navigation />
    <div className="mainContainer">
      <Sidebar getActiveTab={getActiveTab} setActiveTab={setActiveTab}/>
      <div>
      {getActiveTab === "Add story" && <AddStory />}
      {getActiveTab === "See story" && <FeatureStory />}
      </div>
    </div>
      <Footer />
    </StoreStoriesProvider>
  )
}

export default App

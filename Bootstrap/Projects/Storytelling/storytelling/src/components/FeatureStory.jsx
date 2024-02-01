import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FeatureStory.module.css";
import StoryCard from "./StoryCard";
import { StoreStories } from "../store/StoreStories";

const FeatureStory = () => {

    const {storyData, deleteStory} = useContext(StoreStories);


  return (
    <div
      className={`container px-4 py-5 ${styles.featureContainer}`}
      id="custom-cards"
    >
      <h2 className="pb-2 border-bottom">Your stories lands here...</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className={`col ${styles.cardContainer}`}>
          {storyData.map((ele) => (
            <StoryCard key={ele.id} tag={ele.tag} story={ele.story} location={ele.location} date={ele.date} id={ele.id} deleteStory={deleteStory}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureStory;

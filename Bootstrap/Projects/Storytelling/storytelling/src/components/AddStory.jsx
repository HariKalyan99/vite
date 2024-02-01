import React, { useContext, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AddStory.module.css";
import {v4 as uuidv4} from 'uuid';
import { StoreStories } from "../store/StoreStories";


const AddStory = ({tag, story, locations, date, id}) => {


    const {addStory, deleteStory} = useContext(StoreStories);

    const tagInput = useRef("");
    const storyInput = useRef("");
    const location = useRef("");
    const dateInput = useRef("");

    // const handleSubmit = (e) => {
        // e.preventDefault();
        // setStoryData([...storyData, {tag: tagInput.current.value, story: storyInput.current.value, location: location.current.value, date: dateInput.current.value}]);
    //     tagInput.current.value = "";
    //     storyInput.current.value = "";
    //     location.current.value = "";
    //     dateInput.current.value = "";
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addStory(tagInput.current.value, storyInput.current.value, location.current.value, dateInput.current.value, uuidv4());
        tagInput.current.value = "";
         storyInput.current.value = ""; 
         location.current.value = ""; 
         dateInput.current.value = "";
    }

    const [getTag, setTag] = useState(tag);
    const [getStory, setStory] = useState(story);
    const [getlocation, setlocation] = useState(locations);
    const [getDate, setDate] = useState(date);

    if(tag || story || locations || date || id){
        return (
            <form onSubmit={(e) =>  {
                e.preventDefault();
                addStory(getTag, getStory, getlocation, getDate, uuidv4());
                deleteStory(id);
            }}>
              <div className={styles.form}>
                <h1>Add a Tag line</h1>
                <input type="text" placeholder="Add your mood" value={getTag} onChange={(e) => setTag(e.target.value)}/>
                <label>
                  <h1>Write a story</h1>
                  <textarea name="postContent" rows={4} cols={79} value={getStory} onChange={(e) => setStory(e.target.value)}/>
                </label>
                <h1>Location</h1>
                <input type="text" placeholder="where are you now" value={getlocation} onChange={(e) => setlocation(e.target.value)}/>
                <h1>Date</h1>
                <input type="date" value={getDate} onChange={(e) => setDate(e.target.value)}/>
                <br />
                <button>Add my story</button>
              </div>
            </form>
          )
    }

  return (
    <form onSubmit={(e) =>  handleSubmit(e)}>
      <div className={styles.form}>
        <h1>Add a Tag line</h1>
        <input type="text" placeholder="Add your mood" ref={tagInput}/>
        <label>
          <h1>Write a story</h1>
          <textarea name="postContent" rows={4} cols={79} ref={storyInput}/>
        </label>
        <h1>Location</h1>
        <input type="text" placeholder="where are you now" ref={location}/>
        <h1>Date</h1>
        <input type="date" ref={dateInput}/>
        <br />
        <button>Add my story</button>
      </div>
    </form>
  );
};

export default AddStory;

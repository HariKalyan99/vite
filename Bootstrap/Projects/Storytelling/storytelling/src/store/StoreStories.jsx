import { createContext, useReducer } from "react";

export const StoreStories = createContext({
    storyData: [], addStory: () => {}, deleteStory: () => {}
});

const storyReducer = (currentStory, action) => {
    let newStory = currentStory;
    if(action.type === "ADD_STORY"){
      newStory = [{tag: action.payload.inputTag, story: action.payload.inputStory, location: action.payload.inputLocation, date: action.payload.inputDate, id: action.payload.inputId}, ...currentStory];
      return newStory;
    }else if(action.type === "DELETE_STORY"){
      newStory = currentStory.filter((ele) => ele.id !== action.payload.id)
      return newStory;
    }
    return newStory;
  }


const StoreStoriesProvider = ({children}) => {
   
    // const [storyData, setStoryData] = useState([]);
  
    const [storyData, dispatchStory] = useReducer(storyReducer, []);
  
  
    const addStory = (inputTag, inputStory, inputLocation, inputDate, inputId) => {
      // setStoryData([{tag: inputTag, story: inputStory, location: inputLocation, date: inputDate, id: inputId}, ...storyData]);
      dispatchStory({type: "ADD_STORY", payload: {
        inputTag, inputStory, inputLocation, inputDate, inputId
      }})
    }
  
    const deleteStory = (id) => {
      // const removeStory = storyData.filter((ele) => ele.id !== id);
      // setStoryData(removeStory);
      dispatchStory({type: "DELETE_STORY", payload: {
        id
      }})
    }




    return (
        <StoreStories.Provider value={{storyData, addStory, deleteStory}}>
            {children}
        </StoreStories.Provider>
    )
}

export default StoreStoriesProvider;
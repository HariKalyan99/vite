import { createContext, useCallback, useEffect, useReducer, useState} from "react";
import {v4 as uuidv4} from 'uuid';

export const StorePostList = createContext({
    selectedTab: "Post",
    selectTab: () => {},
    loading: false,
    postData: [],
    addPost: () => {},
    deletePost: () => {},
});


const pureReducerFunction = (currentState, action) => {
    let newPostList = currentState;
    if(action.type === "ADD_POST"){
        const tagArr = action.payload.post.tags.split(" ");
        newPostList = [{
            id: uuidv4(),
            title: action.payload.post.title,
            body: action.payload.post.body,
            userId: action.payload.post.userId,
            tags: tagArr,
        }, ...currentState];
    }else if(action.type === "DELETE_POST"){
        newPostList = currentState.filter((user) => user.id !== action.payload.id)
    }else if(action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts;
    }
    return newPostList;
}


const defaultValues = [{
    "id": 1,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      "userId": 9,
      "tags": [
          "history",
          "american",
          "crime"
      ],
}, {
    "id": 2,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      "userId": 9,
      "tags": [
          "history",
          "american",
          "crime"
      ],
}]


const StorePostListProvider = ({children}) => {
  const [selectedTab, setSelectedTab] = useState("Post");

  const [loading, setLoading] = useState(false);

    // const [postData, setPostData] = useState([]);
    const [postData, dispatchPostList] = useReducer(pureReducerFunction, [])

    const selectTab = (tab) => {
        setSelectedTab(tab);
    }
  
    const addPost = useCallback((post) => {
        //   setPostData([{userId: userId, title: title, body: body, tags: tags, id:id}, ...postData]);
        console.log(post)
          dispatchPostList({
            type: "ADD_POST",
            payload: {
                post
            }
          })
    }, [dispatchPostList])
  
    const deletePost = useCallback((id) => {
        dispatchPostList({type: "DELETE_POST", payload: {
            id,
        }})

    //   const deleteUser = postData.filter((user) => user.id !== id);
    //   setPostData(deleteUser);
    }, [dispatchPostList])

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        const {signal} = controller;
        fetch('https://dummyjson.com/posts', signal).then((res) => res.json()).then((data) => {
            let {posts} = data;
            dispatchPostList({type: "ADD_INITIAL_POSTS", payload: {
                posts,
            }})
            setLoading(false);
        })

        return () => {
            controller.abort();
        }
    }, [])


    return (
        <StorePostList.Provider value={{selectedTab, selectTab ,loading, postData,  addPost, deletePost}}>
            {children}
        </StorePostList.Provider>
    )
}

export default StorePostListProvider;
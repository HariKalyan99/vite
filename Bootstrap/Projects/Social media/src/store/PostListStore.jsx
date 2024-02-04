import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const PostListStoreContext = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducerPure = (currentPostList, action) => {
    // console.log(currentPostList, action);
    let newPostList = currentPostList;

    if(action.type === "DELETE_POST"){
        newPostList = currentPostList.filter((post) => post.userId !== action.payload.removerId);
    }else if(action.type === "ADD_POST"){
        newPostList = [{
            id: uuidv4(),
            title: action.payload.posts.title,
            body: action.payload.posts.body,
            reactions: action.payload.posts.reactions,
            userId: action.payload.posts.userId,
            tags: action.payload.posts.tags,
        }, ...currentPostList]
    }else if(action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts;
    }
    return newPostList;
}



const PostListStoreContextProvider = ({children}) => {
    
    const [postList, dispatchPostList] = useReducer(postListReducerPure, []);
    const addPost = (posts) => {
        // todo spread and add method
        console.log(posts)
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                posts
            }
        })
    }

    const addInitialPosts = useCallback((posts) => {

        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts
            }
        })
    }, [dispatchPostList]);

    const deletePost = useCallback((removerId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                removerId,
            }
        })
        // todo filter method
    }, [dispatchPostList]);


    // const [fetching, setFetching] = useState(false);

    // console.log(postList);
  
    // if(!dataFetched){
    //   fetch('https://dummyjson.com/posts')
    // .then(res => res.json())
    // .then(data => addInitialPosts(data.posts));
    // setDataFetched(true);
    // }
  
    // instead of using useState HOOKS To fetch an api call for the initial render we can use useEffect hook 
  
    // useEffect(() => {
    //   setFetching(true);
    //   const controller = new AbortController();
    //   // console.log("controller started", controller);   //we will be using post loader to load the data prior while returning to that page
    //   // console.log("started")
    //   const signal = controller.signal;
    //   fetch('https://dummyjson.com/posts', {signal})
    //   .then(res => res.json())
    //   .then((data) => {addInitialPosts(data.posts);
    //     setFetching(false);
    //   });
  
    //   //component unmount 
    //   // this is a clean up function 
    //   return () => {
    //     // console.log("component unmounted or terminated");
    //     controller.abort();
    //   } 
    // }, [])


    return (
        <PostListStoreContext.Provider value={{
            postList,
            // fetching,
            addPost,
            deletePost,
        }}>
            {children}
        </PostListStoreContext.Provider>
    )
}






export default PostListStoreContextProvider;


import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const PostListStoreContext = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducerPure = (currentPostList, action) => {
    console.log(currentPostList, action);
    let newPostList = currentPostList;

    if(action.type === "DELETE_POST"){
        newPostList = currentPostList.filter((post) => post.userId !== action.payload.removerId);
    }else if(action.type === "ADD_POST"){
        newPostList = [{
            id: uuidv4(),
            title: action.payload.title,
            body: action.payload.body,
            reactions: action.payload.reactions,
            userId: action.payload.userId,
            tags: action.payload.tags,
        }, ...currentPostList]
    }
    return newPostList;
}



const PostListStoreContextProvider = ({children}) => {
    
    const [postList, dispatchPostList] = useReducer(postListReducerPure, trialDefaultValues);
    const addPost = (userId, title, body, reactions, tags) => {
        // todo spread and add method
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                userId, title, body, reactions, tags
            }
        })
    }

    const deletePost = (removerId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                removerId,
            }
        })
        // todo filter method
    }


    return (
        <PostListStoreContext.Provider value={{
            postList,
            addPost,
            deletePost
        }}>
            {children}
        </PostListStoreContext.Provider>
    )
}


const trialDefaultValues = [{
    id: '1',
    title: "Going to LOndon",
    body: "Hi friends, I am goin to London, lots of excitement and hope to return successful.",
    reactions: 2,
    userId: "user-10",
    tags: ["Vacation","london", 'something new to explore'],
},
{
    id: '2',
    title: "coding",
    body: "Hi friends, I am goin to code javascript, lots of excitement.",
    reactions: 6,
    userId: "user-16",
    tags: ["coding", "Mern stack"],
},
]



export default PostListStoreContextProvider;


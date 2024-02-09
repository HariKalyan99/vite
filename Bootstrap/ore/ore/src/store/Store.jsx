import axios from "axios";
import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const oreStore = createContext({
  postData: [],
  addPost: () => {},
  deletePost: () => {},
  editPost: () => {},
  findPost: () => {},
});

const reducerFunctionPure = (currentState, action) => {
  let newPostData = currentState;
  if (action.type === "INITIAL_POSTS") {
    newPostData = action.payload.data;
  } else if (action.type === "SEARCH_POSTS") {
    newPostData = action.payload.data;
  } else if (action.type === "ADD_POST") {
    newPostData = [action.payload.data, ...currentState];
  } else if (action.type === "ADD_POST") {
    newPostData = [action.payload.data, ...currentState];
  } else if (action.type === "DELETE_POST") {
    const deletedData = currentState.filter(
      (post) => post.id !== action.payload.id
    );
    newPostData = deletedData;
  } else if (action.type === "EDIT_POST") {
    const editedData = currentState.filter(
      (post) => post.id !== action.payload.id
    );
    newPostData = [
      {
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        tags: action.payload.tags,
        id: uuidv4(),
      },
      ...editedData,
    ];
  }
  return newPostData;
};

const OreStoreContextProvider = ({ children }) => {

  const [getSearch, setSearch] = useState("");

  const [postData, dispatchPostData] = useReducer(reducerFunctionPure, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchApi(signal);

    const timer = setTimeout(() => {
      return fetchSearch(getSearch);
    }, 600);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [getSearch]);

  const fetchApi = async (signal) => {
    const { data } = await axios.get("http://localhost:8082/posts", signal);

    dispatchPostData({
      type: "INITIAL_POSTS",
      payload: {
        data,
      },
    });
  };

  const fetchSearch = async (searchTerm) => {
    const { data } = await axios.get(
      `http://localhost:8082/posts?keyword=${searchTerm}`
    );
    dispatchPostData({
      type: "SEARCH_POSTS",
      payload: {
        data,
      },
    });
  };

  const addPost = useCallback(async (userId, title, body, reactions, tags) => {
    const { data } = await axios.post("http://localhost:8082/posts", {
      id: uuidv4(),
      title: title,
      body: body,
      userId: userId,
      tags: tags,
      reactions: reactions,
      keyword: tags[0],
    });

    dispatchPostData({
      type: "ADD_POST",
      payload: {
        data,
      },
    });
  });

  const deletePost = useCallback(async(id) => {
    dispatchPostData({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  });

  const editPost = useCallback(async (userId, title, body, reactions, tags, id) => {
    dispatchPostData({
      type: "EDIT_POST",
      payload: {
        userId,
        title,
        body,
        reactions,
        tags,
        id,
      },
    });
  });

  const findPost = (postKey) => {
    setSearch(postKey);
  };

  return (
    <oreStore.Provider
      value={{
        postData,
        addPost,
        deletePost,
        editPost,
        findPost,
      }}
    >
      {children}
    </oreStore.Provider>
  );
};

export default OreStoreContextProvider;

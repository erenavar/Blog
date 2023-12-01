import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        { id: Math.ceil(Math.random() * 99), title: "Angular.Js" },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id != action.payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });

  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [{ title: "React Js" }]
);

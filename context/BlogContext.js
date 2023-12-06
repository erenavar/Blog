import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonServer";

blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "edit_blogpost":
      return state.map((blogpost) => {
        return blogpost.id == action.payload.id ? action.payload : blogpost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id != action.payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post("/blogposts", { title, content });

    if (callback) {
      callback();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonserver.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  [{ title: "React Js", id: Math.random() }]
);

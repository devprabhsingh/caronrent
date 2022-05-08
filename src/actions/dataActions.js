import axios from "axios";
import { posts } from "../tempData";

export const loadPosts = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api.php")
    .then((res) => {
      dispatch({
        type: "POSTS_LOADED",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "LOAD_TEMP_POSTS",
        payload: posts,
      });
    });
};

export const getDetailedPost = (post) => (dispatch) => {
  dispatch({
    type: "POST_LOADED",
    payload: post,
  });
};

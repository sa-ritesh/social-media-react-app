import { UPDATE_POSTS } from "./actionTypes";
import { APIUrls } from "../helpers/urls";

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.posts);
        dispatch(updatePosts(data.posts));
      });

    //dispatch(updatePosts(data.posts));
    //console.log("DISPATCH", data.posts);
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

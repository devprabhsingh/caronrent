const initialState = {
  posts: [],
  post: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS_LOADED":
      return {
        ...state,
        posts: action.payload,
      };
    case "POST_LOADED":
      return {
        ...state,
        post: action.payload,
      };
    case "LOAD_TEMP_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;

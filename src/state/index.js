import { createSlice } from '@reduxjs/toolkit';

/* Setting the initial state of the reducer. */
const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   /* Setting the state.mode to either light or dark. */
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    /* Setting the state.user and state.token to the user and token that is passed in. */
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    /* Setting the state.user and state.token to null. */
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    /* Updating the state.user.friends array with the new friends. */
    setFriends: (state, action) => {
     /* Checking if the user exists, if it does, it will update the user's friends array with the new
     friends. If it doesn't, it will log an error. */
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends non-existence :( ');
      }
    },
    /* Updating the state.posts array with the new post. */
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

   /* Updating the state.posts array with the new post. */
    setPost: (state, action) => {
      /* Updating the state.posts array with the new post. */
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;
        return post;
      });

      /* Updating the state.posts array with the new post. */
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../thunks/fetchPosts';
import { fetchPost } from '../thunks/fetchPosts';

// Create a slice to represent the posts state
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        error: null,
        post: {},
        test: 1
    },
    reducers: {
        
    },
    extraReducers: (builder) => {

        // fetch posts
        builder.addCase(fetchPosts.pending, (state, action) => {
            // update our state to show user we are loading
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            // update state to show request has finished
            state.isLoading = false
            // update data property
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            // update state to show request has finished
            state.isLoading = false
            // update error property
            state.error = action.error.message
        })

        // fetch 1 post
        builder.addCase(fetchPost.pending, (state, action) => {
            // update our state to show user we are loading
            state.isLoading = true
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            // update state to show request has finished
            state.isLoading = false
            // update data property
            state.post = action.payload
        })
        builder.addCase(fetchPost.rejected, (state, action) => {
            // update state to show request has finished
            state.isLoading = false
            // update error property
            state.error = action.error.message
        })

    }
})

export const postsReducer = postsSlice.reducer
export const postsActions = postsSlice.actions
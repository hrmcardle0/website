import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    // get posts, passing api key as header "x-api-key"
    const response = await axios.get(`${base_url}/posts`, )

    return response.data
})

// Fetch a single post
export const fetchPost = createAsyncThunk('posts/fetchPost', async (id) => {
    // get post, passing api key as header "
    const response = await axios.get(`${base_url}/posts/${id}`, {
        headers: {
            'x-api-key': api_key
        }
    })
    return response.data
})
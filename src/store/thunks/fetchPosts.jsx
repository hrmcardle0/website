import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// intended to be public
const api_key = "AIzaSyAx4WEFxrqAlqaFtCs1-Z_soVnN5XqL88A" // THIS KEY IS PUBLIC
const base_url = "https://blogposts-gateway-1j67lu4t.ue.gateway.dev"

// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    // get posts, passing api key as header "x-api-key"
    const response = await axios.get(`${base_url}/posts`, {
        headers: {
            'x-api-key': api_key
        }
    })

    // reverse the posts so the newest post is first
    // order by date
    response.data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
    

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
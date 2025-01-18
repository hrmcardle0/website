import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/postsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

// Create a store with the posts slice
export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

// Export the store
window.store = store

// Setup listeners
setupListeners(store.dispatch)

export * from './thunks/fetchPosts'

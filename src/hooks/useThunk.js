import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

// Custom hook that takes a thunk and returns a function that runs the thunk
function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null) // if we ever get error, update state with error, if not null, show on screen

    const dispatch = useDispatch()

    const runThunk = useCallback(
        (arg) => {
            setIsLoading(true)
            dispatch(thunk(arg))
                .unwrap()
                .catch((err) => setError(err))
                .finally(() => setIsLoading(false)) 
        }, [dispatch, thunk]
    )

    return [runThunk, isLoading, error]
};

export default useThunk
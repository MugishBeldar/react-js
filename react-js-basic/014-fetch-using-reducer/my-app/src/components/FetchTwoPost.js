import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1'
const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'somthing went wrong!'
            }
        default:
            return state;
    }
}
function FetchTwoPost() {
    const [currentState, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        try {
            async function getPost() {
                const response = await axios.get(baseUrl);
                const post = response.data;
                dispatch({ type: 'FETCH_SUCCESS', payload: post });
            }
            getPost();
        } catch (err) {
            dispatch({ type: 'FETCH_ERROR' });
        }
    }, [])
    return (
        <div>
            <h2>FetchTwoPost</h2>
            {currentState.loading ? 'Loading' : currentState.post.title}
            {currentState.error ? currentState.error : null}
        </div>
    )
}
export default FetchTwoPost
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1'
function FetchOnePost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        try {
            async function getPost() {
                const response = await axios.get(baseUrl);
                const post = response.data;
                if (response.data) {
                    setPost(post)
                    setLoading(false)
                    setError('')
                }
            }
            getPost();
        } catch (err) {
            setLoading(false)
            setError('smothing went wrong!')
            setPost({})
        }
    }, [])
    return (
        <div>
            <h2>FetchOnePost</h2>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchOnePost
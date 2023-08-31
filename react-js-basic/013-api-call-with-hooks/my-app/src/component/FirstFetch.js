import React, { useEffect, useState } from 'react'
import axios from 'axios'
const baseUrl = "https://jsonplaceholder.typicode.com/posts"
function FirstFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1)
  const [fetchError, setFetchError] = useState();
  const [idFrombtn, setIdFrombtn] = useState(1);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${idFrombtn}`);
        console.log("🚀 ~ response:", response);
        setPost(response.data);
      } catch (error) {
        console.log("Error fetching post:", error.message);
        setFetchError(error.message)
      }
    };
    fetchPost();
  }, [idFrombtn]);

  const btnHandler = () => {
    setIdFrombtn(id)
  }
  if (!post) return null

  return (
    <div>
      <h3>Fetch using hooks</h3>
      <input type='text' name='id' value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={() => btnHandler()}>Fetch Data</button>
      {/* {
                post ? post.map(obj => {
                    return (
                        <div key={obj.id}>
                            <h3>{obj.id}: {obj.title}</h3>
                            <p>{obj.body}</p>
                        </div>
                    )
                })
                    : null
            } */}
      <p><span><b>Title:   </b></span>{post.title}</p>
      <p><span><b>Body:   </b></span>{post.body}</p>
    </div>
  )
}

export default FirstFetch
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/";
function Postlist() {
  const [post, setPost] = React.useState(null);
  const [err, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch(error => {
        setError("error");
      });
  }, []);
 
  // if (err) { return null } 
  if(!post) {return null}

  return (
    <div>
      {
        post.length ? post.map((post, index) => {
          return (
            <div key={post.id}>
              <h1 key={post.id}>{index + 1} : {post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        }) : null
      }
     
    </div>
  );
}
export default Postlist
// {/* <h1>{post[0].title}</h1>
// <p>{post.body}</p>
// <p>{post}</p> */}
import React, { useState } from 'react';
import axios from 'axios';

const PostReq = () => {
    
    const [formData, setFormData] = useState({
      title: '',
      body: '',
      userId: '',
    });
    const [response, setResponse] = useState(null);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        console.log(formData)
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        setResponse(response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <div>

        {response ? (
          <p>Form submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
            /> <br/>
            <input
              type="text"
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Body"
            /> <br/>
            <input
              type="text"
              name='userId'
              value={formData.userId}
              onChange={handleChange}
              placeholder="User Id"
            /> <br/>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  };
  
  export default PostReq;
  
// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function PostReq() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         userId: 1,
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         console.log(response)
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.userId}: {post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }

// // import React, { useState } from 'react'

// // function PostReq() {
// //     const [userId, setUserId] = useState('');
// //     const [title, setTitle] = useState('');
// //     const [body, setBody] = useState('');

// //     const changeHandler = () => {
// //         console.log(Event);
// //     }
// //     const submitHandler = (e) => {
// //         e.preventDefault()
// //         console.log(e);
// //     }
// //     return (
// //         <div>
// //             <form onSubmit={submitHandler}>
// //                 <div>
// //                     <input type='text' name='userId' onChange={()=>changeHandler(Event)} />
// //                 </div>
// //                 <div>
// //                     <input type='text' name='title'  onChange={()=>changeHandler()} />
// //                 </div>
// //                 <div>
// //                     <input type='text' name='body'  onChange={()=>changeHandler()} />
// //                 </div>
// //                 <button >Submit</button>
// //             </form>
// //         </div>
// //     )
// // }

// // export default PostReq

// import React, { Component } from 'react'

// export class PostReq extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          userId:'',
//          title:'',
//          body:'',
//       }
//     }

//     changeHandler =(e)=>{
//         console.log(e)
//         this.setState({[e.target.name]:e.target.value});
//     }

//     submitHandler = (e) => {
//         e.preventDefault();
//         console.log(this.object)
//     }
//   render() {
//     return (
//               <div>
//             <form onSubmit={this.submitHandler}>
//                 <div>
//                     <input type='text' name='userId' value={this.state.userId} onChange={()=>this.changeHandler()} />
//                 </div>
//                 <div>
//                     <input type='text' name='title' value={this.state.title} onChange={()=>this.changeHandler()} />
//                 </div>
//                 <div>
//                     <input type='text' name='body' value={this.state.body} onChange={()=>this.changeHandler()} />
//                 </div>
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
//   }
// }

// export default PostReq
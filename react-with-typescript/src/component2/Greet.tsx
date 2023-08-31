import React from 'react'

interface STATETYPE {
 message: string;
}
const Greet: React.FC = () => {
  const [msg, setMsg] = React.useState<STATETYPE>({ message: 'Welcome' })
  const likeHandler = (newMessage: string): void => {
    setMsg({ message: newMessage });
  };
  const commentHandler = (newMessage: string): void => {
    setMsg({ message: newMessage });
  };
  const subscribeHandler = (newMessage: string): void => {
    setMsg({ message: newMessage });
  };
  return (
    <>
      <h1 className='ms-4'>{msg.message}</h1>
      <div className="container mt-3 border ms-4 ">
        <div className="row">
          <div className="col-md-3 m-1">
            <div>
              <button className='bg-success' onClick={()=>likeHandler('Like')}>Like</button>
            </div>
          </div>
          <div className="col-md-3 m-1">
            <div>
              <button className='bg-info' onClick={()=>commentHandler('Comment')}>Comment</button>
            </div>
          </div>
          <div className="col-md-3 m-1">
            <div>
              <button className='bg-danger' onClick={()=>subscribeHandler('Subscribe')}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Greet
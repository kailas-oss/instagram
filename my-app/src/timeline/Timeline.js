import React, { useState } from 'react'
import Sugesstions from "./Sugesstions"
import "./Timeline.css"
import Post from './Post/Post'
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "ajay",
      postImage: "img4.jpg",
      likes: 23,
      timestamp: "18h",
    },
    {
      user: "abi",
      postImage: "img3.png",
      likes: 28,
      timestamp: "16h",
    },
    {
      user: "John",
      postImage: "img4.png",
      likes: 270,
      timestamp: "1d",
    },
    {
      user: "vijay",
      postImage: "img2.png",
      likes: 556,
      timestamp: "2d",
    },
  ]);
  return ( 
    <div className="timeline">
        <div className="timeline__left">
          <div className='timeline__post'>
          {posts.map((post) => (
            <Post
              key={post.user} 
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
          </div>
        </div>
        <div className="timeline__right">
            <Sugesstions/>
        </div>
         </div>
  )
}

export default Timeline
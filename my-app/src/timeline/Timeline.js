import React from 'react'
import Sugesstions from "./Sugesstions"
import "./Timeline.css"
import Post from './Post/Post'
function Timeline() {
  return (
    <div className="timeline">
        <div className="timeline__left">
          <div className='timeline__post'>
            <Post/>
          </div>
        </div>
        <div className="timeline__right">
            <Sugesstions/>
        </div>
         </div>
  )
}

export default Timeline
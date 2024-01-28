import React from 'react'
import "./Sugesstions.css"
import { Avatar } from "@mui/material";
function Sugesstions() {
  return (
    <div className='sugessions'>
      <div className='sugessions_title'>sugessions for you</div>
      
      
      <div className='sugessions_userName'>
      <div className='sugessions_userName'>
        <div className='userName_left'>
          <span className='avatar'>
            <Avatar>K</Avatar>
          </span>
          <div className='username_info'>
            <span className='userName'>
k_i_ngston</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow_button'>follow</button>
        </div>
      </div>

      <div className='sugessions_userName'>
      <div className='sugessions_userName'>
        <div className='userName_left'>
          <span className='avatar'>
            <Avatar>N</Avatar>
          </span>
          <div className='username_info'>
            <span className='userName'>ngoo00oo211516
</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow_button'>follow</button>
        </div>
      </div>

      <div className='sugessions_userName'>
      <div className='sugessions_userName'>
        <div className='userName_left'>
          <span className='avatar'>
            <Avatar>I</Avatar>
          </span>
          <div className='username_info'>
            <span className='userName'>
its_xmax_</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow_button'>follow</button>
        </div>
      </div>

      <div className='sugessions_userName'>
      <div className='sugessions_userName'>
        <div className='userName_left'>
          <span className='avatar'>
            <Avatar>S</Avatar>
          </span>
          <div className='username_info'>
            <span className='userName'>
soul_hacker_0.0</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow_button'>follow</button>
        </div>
      </div>
    </div>
  )
}

export default Sugesstions
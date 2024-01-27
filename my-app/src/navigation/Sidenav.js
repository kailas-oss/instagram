
import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className='sidenav'>
      <img className='sidenav_logo' src="logo.png"></img>
    <div className='sidenav_button1'>
      <button className='sidenav_button2'>
        <HomeIcon/>
        <span>Home</span>
      </button>

      <button className='sidenav_button2'>
        <SearchIcon/>
        <span>Search</span>
      </button>

      <button className='sidenav_button2'>
        <ExploreIcon/>
        <span>Explore</span>
      </button>

      <button className='sidenav_button2'>
        <SlideshowIcon/>
        <span>Reels</span>
      </button>
      <button className='sidenav_button2'>
        <ChatIcon/>
        <span>Messages</span>
      </button>
      <button className='sidenav_button2'>
        <FavoriteBorderIcon/>
        <span>Notifications</span>
      </button>
      <button className='sidenav_button2'>
        <AddCircleOutlineIcon/>
        <span>Create</span>
      </button>


    </div>
<div className="sidenav_more">
    <button className="sidenav_button2">
        <MenuIcon/>
        <span>More</span>
    </button>
</div>

    </div>
    
  )
}

export default Sidenav
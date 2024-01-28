import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({user, postImage, likes, timestamp}){
    return(
        <div className="Post">
            <div className="Post_header">
                <div className="Post_headerAuthor">
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user}•<span>{timestamp}</span>
                </div>
                <moreHorizoIcon/>
            </div>
            <div className="Post_image">
            <img className="Post1" src={postImage} ></img>
            </div>
            <div className="Post_footer">
                <div className="Post_footerIcons">
                    <div className="Post_IconsMain">
                        < FavoriteBorderIcon className="postIcon"/>
                        < TelegramIcon className="postIcon"/>
                        < ChatBubbleOutlineIcon className="postIcon"/>
                    </div>
                    <div className="Post_IconSave">
                        <BookmarkBorderIcon className="postIcon"/>
                    </div>
                </div>
            </div>
            <p>{likes} likes</p>

            <div className="Post_header">
                <div className="Post_headerAuthor">
                <Avatar>R</Avatar>
                abishek_abi_011•<span>12h</span>
                </div>
                <moreHorizoIcon/>
            </div>
            <div className="Post_image">
            <img className="Post1" src="img6.jpg"></img>
            </div>
            <div className="Post_footer">
                <div className="Post_footerIcons">
                    <div className="Post_IconsMain">
                        < FavoriteBorderIcon className="postIcon"/>
                        < TelegramIcon className="postIcon"/>
                        < ChatBubbleOutlineIcon className="postIcon"/>
                    </div>
                    <div className="Post_IconSave">
                        <BookmarkBorderIcon className="postIcon"/>
                    </div>
                </div>
            </div>
            <p>72 likes</p>

            <div className="Post_header">
                <div className="Post_headerAuthor">
                <Avatar>R</Avatar>
                abishek_abi_011•<span>12h</span>
                </div>
                <moreHorizoIcon/>
            </div>
            <div className="Post_image">
            <img className="Post1" src="img4.jpg"></img>
            </div>
            
            <div className="Post_footer">
                <div className="Post_footerIcons">
                    <div className="Post_IconsMain">
                        < FavoriteBorderIcon className="postIcon"/>
                        < TelegramIcon className="postIcon"/>
                        < ChatBubbleOutlineIcon className="postIcon"/>
                    </div>
                    <div className="Post_IconSave">
                        <BookmarkBorderIcon className="postIcon"/>
                    </div>
                </div>
            </div>
            <p>72 likes</p>
        </div>
    )
 }
 export default Post;
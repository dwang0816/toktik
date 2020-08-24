import React, { useState} from 'react'
import "./VideoSideBar.css"
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import CommentList from './CommentList'


function VideoSideBar({likes, messageCount, shares, onCommentPress}) {

  const [liked, setLiked] = useState(false)

  const [isCommentShowing, renderComments] = useState(false)


  return (
    <div className="videoSideBar">
      <div className="videoSideBar_button">
        {liked ? 
          <FavoriteIcon 
            fontSize="large" 
            onClick={() => setLiked(false)}
          /> : 
          <FavoriteBorderIcon 
            fontSize="large"
            onClick={() => setLiked(true)}
          />
        }
        <p> {liked ? likes + 1 : likes} </p>
      </div>
      <div className="videoSideBar_button">
        <MessageIcon 
          fontSize="large"
          onClick={() => onCommentPress()}
        />
        <p> {messageCount} </p>
      </div>
      <div className="videoSideBar_button">
        <ShareIcon fontSize="large"/>
        <p> {shares} </p>
      </div>
    </div>
  )
}

export default VideoSideBar


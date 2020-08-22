import React, { useState} from 'react'
import "./VideoSideBar.css"
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'


function VideoSideBar() {

  const [liked, setLiked] = useState(false)

  const onFavoritePress = () => {
    if(liked){
      setLiked(false)
    } else {
      setLiked(true)
    }
  }


  return (
    <div className="videoSideBar">
      <div 
        className="videoSideBar_button"
        onClick={onFavoritePress}
      >
        {liked ? (
          <FavoriteIcon/>
        ) : (
          <FavoriteBorderIcon/>
        )}
        <p> 0 </p>
      </div>
      <div className="videoSideBar_button">
        <MessageIcon/>
        <p> 0 </p>
      </div>
    </div>
  )
}

export default VideoSideBar

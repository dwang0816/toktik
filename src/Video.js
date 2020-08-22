import React, {useRef, useState} from 'react'
import "./Video.css"
import VideoSideBar from "./VideoSideBar"


function Video({url}) {

  const [playing, setPlay] = useState(false)

  const videoRef = useRef(null)
  
  const onVideoPress = () => {
    console.log(videoRef)
    if(playing){
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video 
        className="video_player" 
        src={url}
        loop
        onClick={onVideoPress}
        ref={videoRef}
      ></video>
      
      <VideoSideBar likes={5401} messages={230} shares={10}/>
    </div>
  )
}

export default Video



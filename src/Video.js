import React, {useRef, useState} from 'react'
import "./Video.css"
import VideoSideBar from "./VideoSideBar"


function Video() {

  const [playing, setPlay] = useState(false)

  const videoRef = useRef(null)
  
  const onVideoPress = () => {
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
        src="https://v16m.tiktokcdn.com/84e3165d11be1382b20e8b8f1ef535a9/5f43f920/video/tos/useast2a/tos-useast2a-ve-0068c002/4f4908e5e2c24a978431d2316327a7d0/?a=1233&br=5334&bt=2667&cr=0&cs=0&dr=0&ds=3&er=&l=2020082217300801018906604701B3F11B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajloODp2aWc6djMzZjczM0ApZTs1aGY6Zzw5N2Y2Mzk3OWdjaWJeanE1Z3BfLS1hMTZzczQ0MF9hYy02YS00MjBhMjM6Yw%3D%3D&vl=&vr="
        loop
        onClick={onVideoPress}
        ref={videoRef}
      ></video>
      
      <VideoSideBar likes={5401} messages={230} shares={10}/>
    </div>
  )
}

export default Video



import React, { Component } from 'react'
import "./Video.css"
import VideoSideBar from "./VideoSideBar"
import CommentList from "./CommentList"



export default class Video extends Component {

  state = {
    isPlaying: false,
    commentCollection: [
      "blah", 
      "this is so good!", 
      "wow, must be nice", 
      "where did you get that?", 
      "how much was this trip"
    ],
    showComments: false
  }


  onVideoPress = () => {
    if(this.state.isPlaying){
      event.target.pause()
      this.setState({isPlaying: false})
    } else {
      event.target.play()
      this.setState({isPlaying: true})
    }
  }

  onCommentPress = () => {
    if(this.state.showComments){
      this.setState({showComments: false })

    } else {
      this.setState({showComments: true })
    }
  }

  render() {

    const { url } = this.props
    const { showComments, commentCollection } = this.state

    console.log(showComments)
    return (
      <div className="video">
      <video 
        className="video_player" 
        src={url}
        loop
        onClick={this.onVideoPress}
      />
      
      <VideoSideBar likes={5401} messageCount={230} shares={10} onCommentPress={this.onCommentPress}/>
      {showComments ? <CommentList commentCollection={commentCollection} /> : null}

    </div>
    )
  }
}



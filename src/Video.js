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

  addComment = () => {
    if(event.key === "Enter"){
      const commentCollection = this.state.commentCollection
      commentCollection.push(event.target.value)
      this.setState({
        commentCollection
      })
      event.target.value = ""
    }
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

  onCommentOpen = () => {
    this.setState({ showComments: true })
  }
  
  onCommentClose = () => {
    this.setState({ showComments: false })
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
      
      <VideoSideBar likes={5401} messageCount={230} shares={10} onCommentOpen={this.onCommentOpen}/>
      {showComments ? 
        <CommentList 
          commentCollection={commentCollection} 
          onCommentClose={this.onCommentClose} 
          addComment={this.addComment}
        /> 
        : null
      }

    </div>
    )
  }
}



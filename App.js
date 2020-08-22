import React from 'react';
import Video from './Video';
import "./App.css";


export default function App() {
  return (
    <div className="app">
      <h1>This is the app</h1>
      <div  className="app_videos">
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );

}


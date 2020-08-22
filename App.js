import React from 'react';
import Video from './src/Video';
import "./App.css";


export default function App() {
  return (
    <div className="app">
      <h1>This is the app</h1>
      <div  className="app_videos">
        <Video 
          url={"https://v16m.tiktokcdn.com/84e3165d11be1382b20e8b8f1ef535a9/5f43f920/url/tos/useast2a/tos-useast2a-ve-0068c002/4f4908e5e2c24a978431d2316327a7d0/?a=1233&br=5334&bt=2667&cr=0&cs=0&dr=0&ds=3&er=&l=2020082217300801018906604701B3F11B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajloODp2aWc6djMzZjczM0ApZTs1aGY6Zzw5N2Y2Mzk3OWdjaWJeanE1Z3BfLS1hMTZzczQ0MF9hYy02YS00MjBhMjM6Yw%3D%3D&vl=&vr="}
        />
        <Video 
          url={"https://v16m.tiktokcdn.com/567b1cff6e337c4113d27ba2aa1b81a7/5f4427bd/video/tos/useast2a/tos-useast2a-pve-0068/f10fee6803054939b616c76cd8afa864/?a=1233&br=4188&bt=2094&cr=0&cs=0&dr=0&ds=3&er=&l=2020082220490101019021907141CAA0BD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3drO3hvbmlqdTMzOzczM0ApOjVpOmVmZDs0NzZpOGU4OGdicF5fcnNjZjRfLS01MTZzcy4uMC9iLTJeXjReNjIwMTE6Yw%3D%3D&vl=&vr="}
        />
        <Video 
          url={"https://v16m.tiktokcdn.com/ed9922271d5af38bf0171f9dfcae32e0/5f4427bd/video/tos/useast2a/tos-useast2a-pve-0068/4679831fbe9b402da7ca09de2d6b5b7d/?a=1233&br=2118&bt=1059&cr=0&cs=0&dr=0&ds=3&er=&l=2020082220490101019021907141CAA0BD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2o4cnVuM2ZudTMzZjczM0ApNWU7OzxlOTs0NzY5NmlnZGduam4vX19iY25fLS0vMTZzczQvYC4zNi9gLV82LTYuYjA6Yw%3D%3D&vl=&vr="}
        />
        <Video 
          url={"https://v16m.tiktokcdn.com/7703549580dfc1456fbcac4ccc1df95f/5f44290e/video/tos/useast2a/tos-useast2a-ve-0068/5968e396170a47948471cb46f35fdc05/?a=1233&br=2202&bt=1101&cr=0&cs=0&dr=0&ds=3&er=&l=202008222054380101890500423CCBB90F&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzYzNmVyPHEzcTMzMzczM0ApZzY7aDszZ2Q1N2VoaDQ6NWcvbG9vZG1sYmxfLS0uMTZzczY1Ly1gLWNfXl8yNmNiLzA6Yw%3D%3D&vl=&vr="}
        />
      </div>
    </div>
  );

}


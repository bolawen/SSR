import React from "react";

function About(props) {
  const handleJump=(path)=>{
    props.history.push(path);
  }
  return (
    <div>
      <h2>ReactSSR 功能特色</h2>
      <ul>
        <li>事件交互同构-Home页面图片的变大变小</li>
        <li>路由交互同构-Home页面与About页面的切换、404 处理</li>
      </ul>
      <div>
        <button onClick={()=>handleJump('/')}>跳转至 Home 页面</button>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import image from '../assets/images/334.jpg'

function handleClick(){
  console.log('基础渲染详情');
}

function App() {
  return (
    <div>
      <h3>基于Webpack的React服务端渲染</h3>
      <div><img src={image}/></div>
      <ul>
        <li>基础渲染 <button onClick={handleClick}>了解详情</button></li>
      </ul>
    </div>
  );
}

export default App;
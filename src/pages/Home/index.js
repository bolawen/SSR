import React,{useState} from "react";
import image from "../../assets/images/334.jpg";

function Home(props) {
  const [style, setStyle] = useState({ width: "200px" });
  const handleBig = (step) => {
    const { width } = style;
    const widthNum = Number(width.slice(0, 3)) + step;
    setStyle((style) => {
      return {
        width: widthNum + "px",
      };
    });
  };
  const handleSmall = (step) => {
    const { width } = style;
    const widthNum = Math.max(Number(width.slice(0, 3)) - step, 100);
    setStyle((style) => {
      return {
        width: widthNum + "px",
      };
    });
  };
  const handleJump=(path)=>{
    props.history.push(path);
  }
  return (
    <div>
      <h3>基于Webpack的React服务端渲染</h3>
      <div>
        <img style={style} src={image} />
      </div>
      <div>
        <button onClick={() => handleBig(10)}>变大</button>
        <button onClick={() => handleSmall(10)}>变小</button>
      </div>
      <div>
        <button onClick={()=>handleJump('/about')}>跳转至 About 页面</button>
      </div>
    </div>
  );
}

export default Home;

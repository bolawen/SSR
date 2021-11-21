import api from "../../api/";
import { connect } from "react-redux";
import image from "../../assets/images/334.jpg";
import React, { useState, useEffect } from "react";
import { changeImageListAsync } from "../../store/action/image";

function Home(props) {
  const [style, setStyle] = useState({ width: "200px" });
  const [girlList, setGirlList] = useState([]);
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
  const handleJump = (path) => {
    props.history.push(path);
  };
  useEffect(() => {
    props.changeImageListAsync({ type: "other" });
    if (props.user.username) {
      api.findByAuthImageList({ type: "girl" }).then((res) => {
        const { code, data } = res;
        if (code == 0) {
          setGirlList(() => {
            return data;
          });
        }
      });
    }
  }, []);
  return (
    <div>
      <h3>基于Webpack的React服务端渲染</h3>
      <div>
        <img style={style} src={image} />
      </div>
      <div>
        <h3>交互——同构</h3>
        <button onClick={() => handleBig(10)}>变大</button>
        <button onClick={() => handleSmall(10)}>变小</button>
      </div>
      <div>
        <h3>路由——同构</h3>
        <button onClick={() => handleJump("/about")}>跳转至 About 页面</button>
      </div>
      <div>
        <h3>服务端预渲染（包含 redux ）——同构</h3>
        {props.imageList.map((value, index) => {
          return (
            <img
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
              key={index}
              src={value}
            />
          );
        })}
      </div>
      <div>
        <h3>中间层代理与登录认证——同构</h3>
        {props.user.username ? (
          girlList.map((value, index) => {
            return (
              <img
                style={{ width: "150px", height: "100px", objectFit: "cover" }}
                key={index}
                src={value}
              />
            );
          })
        ) : (
          <button onClick={() => handleJump("/login?redirect=/")}>
            登录后可查看图片
          </button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    imageList: state.imageList,
  };
};
const mapDispatchToProps = {
  changeImageListAsync,
};

const ConnectHome = connect(mapStateToProps, mapDispatchToProps)(Home);

ConnectHome.loadData = (store) => {
  return store.dispatch(changeImageListAsync({ type: "other" }));
};

export default ConnectHome;

import {parse} from 'qs';
import LoginCss from "./index.scss";
import { connect } from "react-redux";
import React, { useState } from "react";
import { Redirect } from "react-router";
import withStyle from "../../hoc/withStyleHoc";
import { login, findUser } from "../../store/action/user";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    await props.login({ username, password });
    await props.findUser();
  };
  const handleChange = (field, e) => {
    const fields = {
      username: setUsername,
      password: setPassword,
    };
    fields[field](() => {
      return e.target.value;
    });
  };
  return (
    <div className="login">
      {!props.user.username ? (
        <div className="login-form">
          <div className="login-form-item">
            <label>用户名</label>
            <input
              value={username}
              name="username"
              placeholder="请输入用户名"
              onChange={(e) => handleChange("username", e)}
            />
          </div>
          <div className="login-form-item">
            <label>密码</label>
            <input
              value={password}
              name="password"
              placeholder="请输入密码"
              onChange={(e) => handleChange("password", e)}
            />
          </div>
          <div className="login-Btn" onClick={() => handleLogin()}>
            登录
          </div>
        </div>
      ) : (
        <Redirect to={parse(props.location.search.slice(1)).redirect||'/'} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  login,
  findUser,
};

const ConnectLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(LoginCss)(Login));

export default ConnectLogin;

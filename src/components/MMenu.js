import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Card, Modal } from "antd";
import "../css/MMenu.css";
const { Header, Footer, Sider, Content } = Layout;

// 앱에서 다른 라우트로 이동, Link 컴포넌트 쓰면 새로고침 안됨, a href 쓰면 새로고침 된다
// NavLink: 설정한 url 활성화되면 특정 스타일 혹은 클래스 지정, 중첩가능한 것은 exact, 활성화될 때 특정 클래스 설정은 activeClassName

class MMenu extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo">
          <Link to="/">aaaa</Link>
        </div>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">
            <Link to="/notice">공지</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/review">후기</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/exchange">교류</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/chat">채팅</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/food">식당</Link>
          </Menu.Item>
        </Menu>
        <div className="login">
          <Link to="/auth/login">로그인</Link>
        </div>
      </Header>
    );
  }
}

export default MMenu;

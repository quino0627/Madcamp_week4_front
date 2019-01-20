import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Card, Input } from "antd";
import "../css/home.css";
//주소에 아무 path가 주어지지 않았을 때 기본적으로 보여주는 라우트

const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

class Home extends Component {
  render() {
    return (
      <Layout className="layout">
        <Content>
          <div className="top-content posts">
            <Card title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
            </Card>
            <Card title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
            </Card>
            <Card title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
            </Card>
            <Card title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
            </Card>
            <Card title="Card title" extra={<a href="#">More</a>}>
              <p>Card content</p>
            </Card>
          </div>
          <div className="middle-content search">
            <Search
              className="search-bar"
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>ST?? Madcamp 4</Footer>
      </Layout>
    );
  }
}

export default Home;

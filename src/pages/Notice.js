import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Pagination } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class Notice extends Component {
  render() {
    return (
      <Layout>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            Content
          </div>
          <Pagination
            defaultCurrent={1}
            total={50}
            style={{ textAlign: "center", padding: "50px" }}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>ST?? Madcamp 4</Footer>
      </Layout>
    );
  }
}

export default Notice;

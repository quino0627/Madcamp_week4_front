import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Pagination, List, Avatar, Icon } from "antd";
import Post from "../components/Post";
const { Header, Footer, Sider, Content } = Layout;

class Notice extends Component {
  state = {};

  componentDidMount() {
    this._getPosts();
  }

  _renderPosts = () => {
    const posts = this.state.posts.map((post, index) => {
      console.log(post);
      return (
        <Post title={post.title} content={post.content} date={post.date} />
      );
    });
    return posts;
  };

  _getPosts = async () => {
    const posts = await this._callApi();
    console.log("awaiting in getPosts");
    this.setState({
      posts
    });
  };

  _callApi = () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        title: `ant design part ${i}`,
        date: "20181111",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
      });
    }
    return listData;
  };

  render() {
    const { posts } = this.state;
    return (
      <div className={posts ? "App" : "App-loading"}>
        {posts ? this._renderPosts() : "loading"}
      </div>
    );
  }
}

export default Notice;

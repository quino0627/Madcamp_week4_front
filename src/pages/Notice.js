import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Pagination,
  List,
  Avatar,
  Icon,
  Button,
  Modal
} from "antd";
import Post from "../components/Post";
const { Header, Footer, Sider, Content } = Layout;

class Notice extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

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
    const { visible, confirmLoading, ModalText } = this.state;
    const { posts } = this.state;
    return (
      <div className={posts ? "Notice" : "Notice-loading"}>
        <div className="notice__row">
          <div>
            <Button type="primary" onClick={this.showModal}>
              Open Modal with async logic
            </Button>
            <Modal
              title="Title"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              <p>{ModalText}</p>
            </Modal>
          </div>
        </div>
        <div className="notice__row">
          {posts ? this._renderPosts() : "loading"}
        </div>
      </div>
    );
  }
}

export default Notice;

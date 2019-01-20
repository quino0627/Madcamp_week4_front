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
  Modal,
  Input,
  Form
} from "antd";
import Post from "../components/Post";
import { UploadNoticeForm } from "../components";
import axios from "axios";
const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const axiosInstance = axios.create({
  baseURL: ""
});

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

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

  handleOk = e => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      e.preventDefault();
      // 상태값을 onCreate 를 통하여 부모에게 전달
      // this.props.onCreate(this.state);
      console.log(this.state.postTitle + this.state.postContent);
      axiosInstance
        .post("http://143.248.140.106:680/api/notice", {
          nick: "Fred",
          title: this.state.postTitle,
          content: this.state.postContent
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      // 상태 초기화
      this.setState({
        title: "",
        content: ""
      });
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // 페이지 리로딩 방지
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const { posts } = this.state;
    return (
      <div className={posts ? "Notice" : "Notice-loading"}>
        <div className="notice__row">
          <div>
            <Button type="primary" onClick={this.showModal}>
              Upload 공지
            </Button>
            <Modal
              title="Title"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              {/* <span>Title</span>
              <Input placeholder="Basic usage" />
              <span>Content</span>
              <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autosize={{ minRows: 2, maxRows: 6 }} */}
              <form onSubmit={this.handleSubmit}>
                <input
                  placeholder="제목"
                  value={this.state.postTitle}
                  onChange={this.handleChange}
                  name="postTitle"
                />
                <input
                  placeholder="컨텐츠"
                  value={this.state.postContent}
                  onChange={this.handleChange}
                  name="postContent"
                />
              </form>
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

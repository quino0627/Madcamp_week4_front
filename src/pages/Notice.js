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
    confirmLoading: false,
    visibles: false,
    titles: "",
    contents: ""
  };
  /*
  showModals = () => {
    this.setState({
      visibles: true
    });
  };
  */
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };
  handleCancels = () => {
    console.log("Clicked cancel button");
    this.setState({
      visibles: false
    });
  };
  componentDidMount() {
    this._getPosts();
  }

  _renderPosts = () => {
    const posts = this.state.posts.map((post, index) => {
      return (
        <Post
          onCreate={this.handleCreate}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      );
    });
    return posts;
  };

  _getPosts = async () => {
    const posts = await this._callApi();
    posts.reverse();
    console.log("awaiting in getPosts");
    console.log(posts);
    this.setState({
      posts
    });
  };

  _callApi = () => {
    const listData = [];
    // for (let i = 0; i < 23; i++) {
    //   listData.push({
    //     title: `ant design part ${i}`,
    //     date: "20181111",
    //     content:
    //       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    //   });
    // }

    // return fetch("http://143.248.140.106:680/api/notice")
    //   .then(potato => {
    //     console.log(potato.json());
    //     return potato.json();
    //   })
    //   .then(json => {
    //     console.log(json);
    //     console.log(json.data);
    //     return json.data;
    //   }) //화살표 표시는 리턴작성할필요없음 모던js라서 자동임
    //  .catch(err => console.log(err));
    return axiosInstance
      .get("http://143.248.140.106:680/api/notice")
      .then(function(response) {
        console.log(response.data);
        return response.data;
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // 페이지 리로딩 방지
  };

  handleOks = e => {
    console.log(e);
    this.setState({
      visibles: false
    });
  };
  handleOk = e => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });

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
        window.location.reload();
        // 상태 초기화
        this.setState({
          postTitle: "",
          postContent: ""
        });
        this.setState({
          visible: false,
          confirmLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleCreate = data => {
    console.log(data);
    this.setState({
      titles: data.title1,
      contents: data.content1,
      visibles: true
    });
  };
  myCallback = data => {
    console.log(data);
  };
  render() {
    const { visible, confirmLoading, ModalText, visibles } = this.state;
    const { posts } = this.state;
    return (
      <div className={posts ? "Notice" : "Notice-loading"}>
        <Post callback={this.myCallback} />
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
            <Modal
              title={this.state.titles}
              visible={this.state.visibles}
              onOk={this.handleOks}
              onCancel={this.handleCancels}
            >
              <span>{this.state.contents}</span>
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

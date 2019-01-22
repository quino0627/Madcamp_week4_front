import React, { Component } from "react";
import axios from "axios";
import Highlighter from "react-highlight-words";
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
  Table,
  Form
} from "antd";
const axiosInstance = axios.create({
  baseURL: ""
});
const { TextArea } = Input;
const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "nick",
    key: "nick"
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "Content",
    key: "content",
    dataIndex: "content"
  }
];
const renderModal = record => record.title;
class Exchange extends Component {
  state = {
    //title: "",
    visible: false,
    ModalText: "",
    confirmLoading: "",
    visibles: false,
    titles: "",
    contents: "",
    searchText: ""
  };
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
        console.log(this.state.postTitle);
      })

      .catch(function(error) {
        console.log(error);
      });
  };
  handleOks = e => {
    console.log(e);
    this.setState({
      visibles: false
    });
  };
  componentDidMount() {
    this._getPosts();
  }
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

  render() {
    const { visible, confirmLoading, ModalText, visibles } = this.state;
    const { posts } = this.state;
    return (
      <div>
        <Button ype="primary" onClick={this.showModal}>
          Upload
        </Button>
        <Modal
          title="공지 올리기"
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
            <div>
              <Input
                size="large"
                placeholder="large size"
                onChange={this.handleChange}
              />
              <div style={{ margin: "24px 0" }} />
              <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autosize={{ minRows: 5, maxRows: 10 }}
                onChange={this.handleChange}
              />
            </div>
            ,
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
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: e => {
                console.log(record.title + " " + rowIndex);
                this.setState({
                  visibles: true,
                  titles: record.title,
                  contents: record.content
                });
              }
            };
          }}
          columns={columns}
          dataSource={this.state.posts}
        />
      </div>
    );
  }
}

export default Exchange;

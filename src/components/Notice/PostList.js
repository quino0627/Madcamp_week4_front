import React from "react";
import Post from "./Post";
import { Layout, Menu, Breadcrumb, Pagination, List, Avatar, Icon } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const PostList = ({ posts, onToggleLike, onCommentClick, masonryRef }) => {
  const postList = posts.map(post => (
    <Post
      key={post.get("_id")}
      post={post}
      //   onToggleLike={onToggleLike}
      //   onCommentClick={onCommentClick}
    />
  ));
  return (
    // <Masonry options={{ gutter: 16 }} ref={masonryRef}>
    //   {postList}
    // </Masonry>
    <Layout>
      <Content>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          {postList}
        </div>

        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ textAlign: "center", padding: "50px" }}
        />
      </Content>
    </Layout>
  );
};

export default PostList;

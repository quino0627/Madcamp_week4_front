import React from "react";
import "./Post.css";
import LinesEllipsis from "react-lines-ellipsis";

const Post = ({ title, content, date }) => {
  return (
    <div className="post">
      <div className="post__columns">
        <h1 className="post_title">{title}</h1>
      </div>
      <div className="post__columns">{date}</div>
      <div className="post__columns">{content}</div>
    </div>
  );
};

export default Post;

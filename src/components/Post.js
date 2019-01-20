import React from "react";
import "./Post.css";

const Post = ({ title, content, date }) => {
  return (
    <div className="post">
      <div className="post__columns">
        <Title title={title} />
      </div>
      <div className="post__columns" />
      <div className="post__columns" />
    </div>
  );
};

const Title = ({ title }) => {
  return <span className="post__title">{title}</span>;
};

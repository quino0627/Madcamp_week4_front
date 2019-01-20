import React from "react";
import PostFooter from "./PostFooter";
import CommentBlockContainer from "containers/Shared/PostList/CommentBlockContainer";

import { Link } from "react-router-dom";

const Post = ({ post, onToggleLike, onCommentClick }) => {
  const {
    _id,
    count,
    username,
    content,
    likesCount,
    liked,
    createdAt,
    comments
  } = post.toJS();

  const toggleLike = () =>
    onToggleLike({
      postId: _id,
      liked
    });

  const commentClick = () => onCommentClick(_id);

  return (
    <Wrapper>
      <PostHead>
        <UserThumbnail image={`/api/users/${username}/thumbnail`} />
        <Username to={`/@${username}`}>{username}</Username>
        <Count>#{count}번째 생각</Count>
        <Time>
          <TimeAgo date={createdAt} formatter={formatter} />
        </Time>
      </PostHead>
      <Content>{content}</Content>
      <PostFooter
        likesCount={likesCount}
        liked={liked}
        onToggleLike={toggleLike}
        onCommentClick={commentClick}
        comments={comments}
      />
      <CommentBlockContainer post={post} />
    </Wrapper>
  );
};

export default scuize(Post, function(nextProps, nextState) {
  return this.props.post !== nextProps.post; // 포스트가 변경되었을때만 리렌더링
});

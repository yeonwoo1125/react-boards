import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';

const PostMain = props => {
  return (
    <>
      <h2 align="center">°Ô½ÃÆÇ</h2>
      <PostList />
    </>
  )
}

export default PostMain;
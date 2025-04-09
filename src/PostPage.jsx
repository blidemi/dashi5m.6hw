import React from 'react';

const PostPage = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostPage;

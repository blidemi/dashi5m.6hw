import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostPage';
import Search from './Search';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (searchTerm, isAdvanced) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (isAdvanced && post.body.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1>Посты</h1>
      <Search onSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;

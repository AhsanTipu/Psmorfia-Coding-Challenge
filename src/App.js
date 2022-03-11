import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './components/Main';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  return (
<>
<Main posts={posts} loading={loading} />
</>

    );
}

export default App;

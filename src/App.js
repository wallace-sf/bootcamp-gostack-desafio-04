import React from 'react';

import './global.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div id="app">
      <Header />
      <PostList />
    </div>
  )
}

export default App;
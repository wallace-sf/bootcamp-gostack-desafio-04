import React, { Component } from 'react';

import './style.css';
import Comment from '../Comment';

class Post extends Component {

  render() {
    const { post } = this.props;

    return (
      <div className="post">
        <header>
          <div className="author-avatar">
            <img
              src={post.author.avatar}
              alt="" />
          </div>
          <div className="author-info">
            <strong>{post.author.name}</strong>
            <span>{post.date}</span>
          </div>
        </header>
        <p>{post.content}</p>
        <hr />
        {post.comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment} />
          )
        )}
      </div>
    )
  }
}

export default Post;
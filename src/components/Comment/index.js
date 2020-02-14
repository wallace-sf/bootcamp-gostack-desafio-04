import React, { Component } from 'react';

import './style.css';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="comment">
        <div className="comment-avatar">
          <img
            src={comment.author.avatar}
            alt="" />
        </div>
        <p>
          <strong>{comment.author.name} </strong>
          {comment.content}
        </p>
      </div>
    )
  }
}

export default Comment;
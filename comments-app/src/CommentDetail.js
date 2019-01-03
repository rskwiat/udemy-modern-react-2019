import React from 'react';

const CommentDetail = ({ avatar, author, date, comment }) => {
  return (
    <div className="card">
      <div className="content comment">
        <a href="/">
          <img className="right floated mini ui image"
            alt={author}
            src={avatar} 
          />
        </a>
        <div className="header">
          <a href="/" className="author">
            {author}
          </a>
        </div>
        <div className="meta">
          <span className="date">{date}</span>
        </div>
        <div className="description">
          {comment}
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;

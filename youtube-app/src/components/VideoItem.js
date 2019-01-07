import React from 'react';
import '../css/video-item.css';

const VideoItem = ({ onVideoSelect, video }) => {
  const { snippet } = video;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={snippet.thumbnails.default.url}
        alt={snippet.title}
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;

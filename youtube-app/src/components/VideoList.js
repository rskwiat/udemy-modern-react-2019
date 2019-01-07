import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {

    return (
      <VideoItem 
        key={video.etag} 
        onVideoSelect={onVideoSelect} 
        video={video} 
      />
    );
  });

  return (
    <div className="five wide column">
      <div className="ui aligned divided list">
        {renderedList}
      </div>
    </div>
  );
}

export default VideoList;

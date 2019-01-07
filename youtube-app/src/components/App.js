import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends Component {
  state = { 
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('popular apps');
  }

  onTermSubmit = async (term) => {
    const resp = await youtube.get('search', {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <VideoDetail video={selectedVideo} />
            <VideoList 
              onVideoSelect={this.onVideoSelect}
              videos={videos} 
            />
          </div>
        </div>
      </div>
    );
  }

}


export default App;

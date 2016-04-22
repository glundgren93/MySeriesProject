import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDVq5Y2AgilV8HNWqORx3cx67taAZhmNUE';

export default class ShowTrailerDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null
    };

    // bind to ShowTrailerDetail context
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch(`${props.show} trailer`);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
          selectedVideo: videos[0]
      });
    });
  }

  render() {
    // if video is not yet loaded
    if (!this.state.selectedVideo) {
      return <div>Loading Video...</div>;
    }

    const videoId = this.state.selectedVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    if (!this.state.selectedVideo) {
      return <div>Loading...</div>;
    }

    return (
      <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
      </div>
    );
  }
}

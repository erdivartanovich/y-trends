import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Youtube.Player.scss';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Redirect } from 'react-router-dom';

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  _onError = () => {
    this.setState({
      hasError: true
    });
  }

  render() {
    if(this.state.hasError) {
      return <Redirect to="/" />;
    }

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        origin: 'http://localhost:3000'
      }
    };

    return (
      <div className="video-container">
        <YouTube
          videoId={this.props.match.params.videoId}
          opts={opts}
          onError={this._onError}
        />
        <div className="controls">
          <Link className="btn btn-primary" to="/youtube"> &#60; Back to Trends</Link>
        </div>
      </div>);
  }
}

YoutubePlayer.propTypes = {
  match: PropTypes.object
};

export default YoutubePlayer;

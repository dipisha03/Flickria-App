// Import React
import React from 'react';
import Sound from 'react-sound';

// Need to fix sound 
export default class Sound2 extends React.Component {
render() {
    return (
        <Sound
        url="https://open.spotify.com/embed/track/6RMMWRA9UY9D8DlPNSUytf"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}



import React, { Component } from 'react';

class Players extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.player.name}</h1>
        <h3>{this.props.player.country}</h3>
        <h3>{this.props.player.searches}</h3>
      </div>
    )
  }
}

export default Players;
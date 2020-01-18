import React, { Component } from 'react';

class Players extends Component {
  render() {
    return(
        <div className="playerCard">
          <h5>{this.props.player.id + 1}</h5>
          <h2>{this.props.player.name}</h2>
          <h4>{this.props.player.country}</h4>
          <h4>{this.props.player.searches}</h4>
        </div>
    )
  }
}

export default Players;
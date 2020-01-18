import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

//hooks
import DarkSwitch from './components/DarkSwitch';

//components
import Players from './components/Players';

class App extends Component {

  state = {
    players : []
  }

  axiosFetch = () => {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res =>{
      console.log(res);
      this.setState({players : res.data})
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.axiosFetch();
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players </h1>
        <DarkSwitch />
        <div>
          {this.state.players.map(player => 
            <Players 
              player={player} key={player.id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

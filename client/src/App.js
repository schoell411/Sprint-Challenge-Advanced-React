import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  axiosFetch = () => {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res =>{
      console.log(res);
      console.log(res.data[0].name);
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
      </div>
    );
  }
}

export default App;

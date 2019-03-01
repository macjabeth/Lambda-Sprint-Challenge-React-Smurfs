import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://penguin.linux.test:3333/smurfs')
      .then(({ data }) => this.setState({ smurfs: data }))
      .catch(err => console.error(err));
  }

  addSmurf = smurf => {
    axios
      .post('http://penguin.linux.test:3333/smurfs', smurf)
      .then(({ data }) => this.setState({ smurfs: data }))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <Smurfs smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={() => <SmurfForm addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

const initialSmurf = { name: '', age: '', height: '' };

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: initialSmurf
    };
  }

  addSmurf = event => {
    event.preventDefault();

    axios
      .post('http://penguin.linux.test:3333/smurfs', this.state.smurf)
      .then(({ data }) => this.props.updateSmurfs(data))
      .catch(err => console.error(err));

    this.setState({ smurf: initialSmurf });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(state => ({ smurf: { ...state.smurf, [name]: value } }));
  };

  render() {
    const { name, age, height } = this.state.smurf;
    return (
      <div>
        <h3>It's Smurfin' Time</h3>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

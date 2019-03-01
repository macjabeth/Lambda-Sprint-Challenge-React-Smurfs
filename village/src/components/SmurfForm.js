import React, { Component } from 'react';
import axios from 'axios';

const initialSmurf = { name: '', age: '', height: '' };

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: initialSmurf,
      id: false
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      const [id, name, age, height] = state;
      this.setState({ smurf: { name, age, height }, id });
    }
  }

  addSmurf = event => {
    event.preventDefault();

    const { id } = this.state,
      editing = typeof id === 'number';

    const url = editing
      ? `http://penguin.linux.test:3333/smurfs/${id}`
      : 'http://penguin.linux.test:3333/smurfs';

    axios[editing ? 'put' : 'post'](url, this.state.smurf)
      .then(({ data }) => this.props.updateSmurfs(data))
      .catch(err => console.error(err));

    this.setState({ smurf: initialSmurf });

    this.props.history.push('/');
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

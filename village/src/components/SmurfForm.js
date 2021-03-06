import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
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
        <FormTitle>It's Smurfin' Time</FormTitle>
        <Form onSubmit={this.addSmurf}>
          <Input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <Input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <Input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <Input type="submit" value="Add Smurf" />
        </Form>
      </div>
    );
  }
}

const FormTitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #002a32;
  padding-top: 3rem;
`;

const Form = styled.form`
  width: 35rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  height: 4rem;
  width: 100%;
  border: 2px solid midnightblue;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  background-color: ${({ type }) =>
    (type === 'submit' ? darken : lighten)(0.2, '#75abbc')};
  color: ${({ type }) =>
    type === 'submit' ? lighten(0.8, '#002a32') : '#002a32'};
  ${({ type }) =>
    type === 'submit' &&
    css`
      font-variant: small-caps;
    `}

  &::placeholder {
    text-align: center;
  }
`;

export default SmurfForm;

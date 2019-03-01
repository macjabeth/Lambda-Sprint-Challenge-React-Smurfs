import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

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

  updateSmurfs = data => {
    this.setState({ smurfs: data });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />

        <Header>
          <NavBar>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/smurf-form">Create</NavLink>
          </NavBar>
        </Header>

        <Route
          exact
          path="/"
          render={() => (
            <Smurfs
              smurfs={this.state.smurfs}
              updateSmurfs={this.updateSmurfs}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={() => <SmurfForm updateSmurfs={this.updateSmurfs} />}
        />
      </React.Fragment>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #75ABBC;
    color: #071013;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  background-color: #002a32;
`;

const NavBar = styled.nav`
  > a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    margin-left: 2rem;

    &.active {
      color: #00d6d6;
    }
  }
`;

export default App;

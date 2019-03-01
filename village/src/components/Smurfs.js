import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <SmurfsContainer>
        <Title>Smurf Village</Title>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </SmurfsContainer>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const SmurfsContainer = styled.div``;

const Title = styled.h1`
  padding: 1.5rem 0.5rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
`;

export default Smurfs;

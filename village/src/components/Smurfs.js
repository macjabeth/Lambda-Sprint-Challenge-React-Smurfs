import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <SmurfsContainer>
        <SmurfsList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                history={this.props.history}
                updateSmurfs={this.props.updateSmurfs}
              />
            );
          })}
        </SmurfsList>
      </SmurfsContainer>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const SmurfsContainer = styled.div`
  padding: 1rem;
`;

const SmurfsList = styled.ul`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default Smurfs;

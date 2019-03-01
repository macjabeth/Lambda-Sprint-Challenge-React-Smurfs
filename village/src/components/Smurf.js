import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Smurf = props => {
  const editSmurf = () => props.editSmurf(props);
  const deleteSmurf = () => {
    axios
      .delete(`http://penguin.linux.test:3333/smurfs/${props.id}`)
      .then(({ data }) => props.updateSmurfs(data))
      .catch(err => console.error(err));
  };

  return (
    <SmurfWrapper>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Button onClick={editSmurf} bg="goldenrod">
        Edit
      </Button>
      <Button onClick={deleteSmurf} bg="maroon">
        Delete
      </Button>
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

const SmurfWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #314d7c;
  border: 3px solid midnightblue;
  color: #fff;
  line-height: 1.5;

  > h3 {
    font-size: 1.2em;
    font-variant: small-caps;
    color: #e0d21c;
  }
`;

const Button = styled.button`
  margin: 0.5rem 0.75rem 0;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 0.6em;
  background-color: ${props => props.bg};
  outline: none;
`;

export default Smurf;

import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCurrentBalance = styled.div`
  display: flex;
  margin: 10px auto 0 auto;
  width: 80%;
  justify-content: center;
`;

const Bar = styled.div`
margin-right:2px;
width:${props => props.width}
height:20px;
background-color:${props => (props.active ? '#8f94fb' : '#ccc')}
border-radius:6px;
`;

class CurrentBalance extends Component {
  render() {
    return (
      <StyledCurrentBalance>
        <Bar width="25%" active />
        <Bar width="60%" />
        <Bar width="15%" />
      </StyledCurrentBalance>
    );
  }
}

export default CurrentBalance;
